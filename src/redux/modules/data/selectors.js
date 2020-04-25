import { createSelector } from 'reselect';
import { filterSelectors } from '../filter';

const getData = ({ data }) => data;

const getFilteredData = createSelector(
  [
    filterSelectors.getFilter,
    filterSelectors.getFilterActiveCategories,
    getData,
  ],
  (filter, filterActiveCategories, data) => {
    const {
      price: {
        min: { value: minValue },
        max: { value: maxValue }
      },
      discount: {
        total: { value: discountValue }
      }
    } = filter;
    const filteredProducts = data.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );

    if (filterActiveCategories.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        filterActiveCategories.includes(category)
      );
    }
    return filteredProducts;
  }
);

export { getData, getFilteredData };
