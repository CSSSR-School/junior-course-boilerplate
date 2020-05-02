import { createSelector } from 'reselect';

const getRouter = ({ router }) => router;

const getRouterSearch = createSelector(
  getRouter,
  ({ location: { search } }) => search
);

const getRouterSearchParams = createSelector(
  getRouterSearch,
  search => new URLSearchParams(search)
);

const getRouterSearchCategories = createSelector(getRouterSearchParams, searchParams =>
  searchParams.getAll('category')
);

export {
  getRouter,
  getRouterSearch,
  getRouterSearchParams,
  getRouterSearchCategories
};
