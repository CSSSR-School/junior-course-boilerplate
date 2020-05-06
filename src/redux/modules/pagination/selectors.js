import { createSelector } from 'reselect';
import { productsSelectors } from '../products';
import { routerSelectors } from '../router';

const getPagination = ({ pagination }) => {
  return pagination;
};

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

export { getPagination, getVisibleProductsList };
