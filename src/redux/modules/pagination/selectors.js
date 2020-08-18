import { createSelector } from 'reselect';
import { productsSelectors } from '../products';
import { routerSelectors } from '../router';

const getPagination = ({ pagination }) => {
  return pagination;
};

const getPagesTotalCount = createSelector(
  [getPagination, productsSelectors.getFilteredProducts],
  ({ itemsPerPage }, filteredProducts) =>
    Math.ceil(filteredProducts.length / itemsPerPage)
);

const getVisibleProductsList = createSelector(
  [
    getPagination,
    routerSelectors.getRouterSearchCurrentPage,
    productsSelectors.getFilteredProducts
  ],
  (pagination, currentPage, filteredProducts) => {
    const { itemsPerPage } = pagination;

    const lastProductIndex = currentPage * itemsPerPage;

    const firstProductIndex = lastProductIndex - itemsPerPage;

    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export { getPagination, getVisibleProductsList, getPagesTotalCount };
