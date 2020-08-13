import { createSelector } from 'reselect';
import { get, chunk } from 'lodash-es';

import { filterProducts } from './helper';


export const appSelector = state => state.app;
export const routerSelector = state => state.router;

export const routerLocationSelector = state => routerSelector(state).location;

export const pageIdSelector = createSelector(
  routerLocationSelector,
  (location) => {
    const path = get(location, 'pathname', '');

    return path.split('/')[2];
  }
);

export const maxVisibleProductsSelector = state => appSelector(state).maxVisibleProducts;
export const productsSelector = state => appSelector(state).products;
export const filtersSelector = state => appSelector(state).filters;

export const filteredProductsSelector = createSelector(
  productsSelector,
  filtersSelector,
  (products, filters) => filterProducts(products, filters)
);

export const visibleProductsSelector = createSelector(
  filteredProductsSelector,
  pageIdSelector,
  maxVisibleProductsSelector,
  (products, pageId, maxVisible) => {
    const chunks = chunk(products, maxVisible);

    return chunks[--pageId] || [];
  }
);

export const productsPageCountSelector = createSelector(
  filteredProductsSelector,
  maxVisibleProductsSelector,
  (products, maxVisible) => {
    if (!products) {
      return 0;
    }
    const intCount = products.length / maxVisible;

    return Number.isInteger(intCount) ? intCount : (parseInt(intCount, 10) + 1);
  }
);

