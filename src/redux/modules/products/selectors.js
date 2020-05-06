import { createSelector } from 'reselect';
import { filterSelectors } from '../filter';
import { routerSelectors } from '../router';

const getProducts = state => {
  const { products } = state;

  return products;
};

const getProductsList = createSelector(getProducts, ({ list }) => list);

const getProductsListItemById = (state, id) =>
  createSelector(getProductsList, list => {
    const [item] = list.filter(value => value.id === Number(id));

    return item;
  })(state);

const reduceProductsList = (state, reducer, value) =>
  createSelector(getProductsList, list => {
    return reducer(item => item.value, list)[value];
  })(state);

const getFilteredProducts = createSelector(
  [
    filterSelectors.getFilterPrice,
    filterSelectors.getFilterDiscount,
    routerSelectors.getRouterSearchCategories,
    getProductsList
  ],
  (filterPrice, filterDiscount, searchCategories, list) => {
    const {
      min: { value: minValue },
      max: { value: maxValue }
    } = filterPrice;

    const {
      total: { value: discountValue }
    } = filterDiscount;

    const filteredProducts = list.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );

    if (searchCategories.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        searchCategories.includes(category)
      );
    }

    return filteredProducts;
  }
);

export {
  getProducts,
  reduceProductsList,
  getProductsListItemById,
  getFilteredProducts
};
