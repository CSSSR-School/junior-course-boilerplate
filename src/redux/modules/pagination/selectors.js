import { createSelector } from 'reselect';
import { dataSelectors } from '../data';
import { routerSelectors } from '../router';

const getPagination = ({ pagination }) => {
  return pagination;
};

const getVisibleProductsList = createSelector(
  [getPagination, dataSelectors.getFilteredData, routerSelectors.getRouter],
  (pagination, filteredProducts, router) => {
    const { itemsPerPage } = pagination;

    const { location: { search } } = router;

    const searchParams = new URLSearchParams(search)

    const currentPage = searchParams.has('currentPage')
      ? searchParams.get('currentPage')
      : pagination.currentPage;

    const lastProductIndex = currentPage * itemsPerPage;

    const firstProductIndex = lastProductIndex - itemsPerPage;

    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export { getPagination, getVisibleProductsList };
