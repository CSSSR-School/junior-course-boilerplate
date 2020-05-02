import { createSelector } from 'reselect';
import { dataSelectors } from '../data';
import { routerSelectors } from '../router';

const getPagination = ({ pagination }) => {
  return pagination;
};

const getCurrentPage = createSelector(
  [routerSelectors.getRouterSearchParams, getPagination],
  (searchParams, pagination) => {
    const { currentPage } = pagination;

    return searchParams.has('currentPage')
    ? Number(searchParams.get('currentPage'))
    : currentPage;
  }
);

const getVisibleProductsList = createSelector(
  [
    getPagination,
    getCurrentPage,
    dataSelectors.getFilteredData,
  ],
  (pagination, currentPage, filteredProducts) => {
    const { itemsPerPage } = pagination;

    const lastProductIndex = currentPage * itemsPerPage;

    const firstProductIndex = lastProductIndex - itemsPerPage;

    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export { getPagination, getCurrentPage, getVisibleProductsList };
