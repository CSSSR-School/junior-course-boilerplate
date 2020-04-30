import { createSelector } from 'reselect';
import { routerSelectors } from '../router';

const getFilter = ({ filter }) => filter;

const getFilterPrice = createSelector(getFilter, filter => filter.price);

const getFilterDiscount = createSelector(getFilter, filter => filter.discount);

const getFilterCategories = createSelector(
  getFilter,
  routerSelectors.getRouterSearch,
  (filter, search) => {
    const searchCategories = new URLSearchParams(search).getAll('category');

    return Object.keys(filter.categories).reduce(
      (acc, category) => ({
        ...acc,
        [category]: { isActive: searchCategories.includes(category) }
      }),
      filter.categories
    );
  }
);

export { getFilterPrice, getFilterDiscount, getFilterCategories };
