import { createSelector } from 'reselect';
import { dataSelectors } from '../data';
import { routerSelectors } from '../router';

const getPagination = ({ pagination }) => {
  return pagination;
};

const getVisibleProductsList = createSelector(
  [getPagination, routerSelectors.getRouterSearchCurrentPage, dataSelectors.getFilteredData],
  (pagination, currentPage, filteredProducts) => {
    const { itemsPerPage } = pagination;

    const lastProductIndex = currentPage * itemsPerPage;

    const firstProductIndex = lastProductIndex - itemsPerPage;

    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export { getPagination, getVisibleProductsList };
