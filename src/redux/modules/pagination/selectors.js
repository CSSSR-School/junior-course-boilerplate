import { createSelector } from 'reselect';
import { productsSelectors } from '../products';

const getPagination = ({ pagination }) => {
  return pagination;
};

const { getFilteredProductsList } = productsSelectors;

const getVisibleProductsList = createSelector(
  [getPagination, getFilteredProductsList],
  (pagination, filteredProducts) => {
    const { currentPage, itemsPerPage } = pagination;
    const lastProductIndex = currentPage * itemsPerPage;
    const firstProductIndex = lastProductIndex - itemsPerPage;
    return filteredProducts.slice(firstProductIndex, lastProductIndex);
  }
);

export { getPagination, getVisibleProductsList };
