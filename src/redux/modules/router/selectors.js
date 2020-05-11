import { createSelector } from 'reselect';

const getRouter = ({ router }) => router;

const getRouterLocation = createSelector(getRouter, ({ location }) => location);

const getRouterSearch = createSelector(
  getRouterLocation,
  ({ search }) => search
);

const getRouterSearchCategories = createSelector(getRouterSearch, search =>
  new URLSearchParams(search).getAll('category')
);

const getRouterSearchCurrentPage = createSelector(getRouterSearch, search => {
  const searchParams = new URLSearchParams(search);

  return searchParams.has('currentPage')
    ? Number(searchParams.get('currentPage')) || 1
    : 1;
});

export {
  getRouterSearch,
  getRouterSearchCategories,
  getRouterSearchCurrentPage
};
