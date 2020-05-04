import { createSelector } from 'reselect';
import { filterSelectors } from '../filter';
import { routerSelectors } from '../router';

const getData = state => {
  const { data } = state;

  return data;
};

const getItems = createSelector(getData, ({ items }) => items);

const getItemById = (state, id) =>
  createSelector(getItems, items => {
    const [item] = items.filter(value => value.id === Number(id));

    return item;
  })(state);

const getFilteredData = createSelector(
  [
    filterSelectors.getFilterPrice,
    filterSelectors.getFilterDiscount,
    routerSelectors.getRouterSearchCategories,
    getItems
  ],
  (filterPrice, filterDiscount, searchCategories, items) => {
    const {
      min: { value: minValue },
      max: { value: maxValue }
    } = filterPrice;

    const {
      total: { value: discountValue }
    } = filterDiscount;

    const filteredProducts = items.filter(
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

export { getData, getItems, getItemById, getFilteredData };
