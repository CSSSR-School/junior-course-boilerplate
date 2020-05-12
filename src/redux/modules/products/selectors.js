import { createSelector } from 'reselect';
import { filterSelectors } from '../filter';
import { routerSelectors } from '../router';
import { basketSelectors } from '../basket';

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

const reduceProductsList = (state, reducer, propName) =>
  createSelector(getProductsList, list => {
    if (list.length === 0) {
      return 0;
    }

    return reducer(item => item.value, list)[propName];
  })(state);

const filterProductsListByBasketList = state =>
  createSelector(
    [getProductsList, basketSelectors.getBasketList],
    (productsList, basketList) =>
      productsList.filter(value => basketList.includes(value.id))
  )(state);

const mapProductsList = (state, propName) =>
  createSelector(filterProductsListByBasketList, filteredProductsList =>
    filteredProductsList.map(value => value[propName])
  )(state);

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
  getProductsList,
  filterProductsListByBasketList,
  reduceProductsList,
  mapProductsList,
  getProductsListItemById,
  getFilteredProducts
};
