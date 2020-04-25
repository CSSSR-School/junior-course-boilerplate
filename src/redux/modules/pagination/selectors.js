import { createSelector } from 'reselect';
import { dataSelectors } from '../data';

const getPagination = ({ pagination }) => {
  return pagination;
};

const getVisibleProductsList = createSelector(
  [getPagination, dataSelectors.getFilteredData],
  (pagination, filteredProducts) => {
    const { currentPage, itemsPerPage } = pagination;
    const lastProductIndex = currentPage * itemsPerPage;
    const firstProductIndex = lastProductIndex - itemsPerPage;

    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export { getPagination, getVisibleProductsList };
