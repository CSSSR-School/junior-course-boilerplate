import { createSelector } from 'reselect';
import { routerSelectors } from '../router';

const getFilter = ({ filter }) => filter;

const getFilterPrice = createSelector(getFilter, filter => filter.price);

const getFilterDiscount = createSelector(getFilter, filter => filter.discount);

const getFilterCategories = createSelector(
  getFilter,
  routerSelectors.getRouterSearchCategories,
  (filter, searchCategories) => {
    const { categories: filterCategories } = filter;

    return Object.keys(filterCategories).reduce(
      (acc, category) => ({
        ...acc,
        [category]: { isActive: searchCategories.includes(category) }
      }),
      filterCategories
    );
  }
);

export { getFilterPrice, getFilterDiscount, getFilterCategories };
