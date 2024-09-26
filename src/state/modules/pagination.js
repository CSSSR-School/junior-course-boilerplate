import {createSelector} from 'reselect';
import {getFilteredProducts} from './product';
import {PRODUCTS_LIMIT} from '../../consts';

// Selectors
export const getTotalPages = createSelector(
  [(state) => getFilteredProducts(state)],
  (productsList) => Math.ceil(productsList.length / PRODUCTS_LIMIT)
);
