import { createSelector } from 'reselect';

import { filterSelectors } from '../filter';
import { routerSelectors } from '../router';

const getData = ({ data }) => data;

const getItemById = ({ data }, id) => {
  const [item] = data.filter(value => value.id === Number(id));

  return item;
};

const getFilteredData = createSelector(
  [
    filterSelectors.getFilterPrice,
    filterSelectors.getFilterDiscount,
    routerSelectors.getRouterSearch,
    getData
  ],
  (filterPrice, filterDiscount, search, data) => {
    const {
      min: { value: minValue },
      max: { value: maxValue }
    } = filterPrice;

    const {total: { value: discountValue }} = filterDiscount;

    const filteredProducts = data.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );

    const searchCategories = new URLSearchParams(search).getAll('category');

    if (searchCategories.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        searchCategories.includes(category)
      );
    }

    return filteredProducts;
  }
);

export { getData, getItemById, getFilteredData };
