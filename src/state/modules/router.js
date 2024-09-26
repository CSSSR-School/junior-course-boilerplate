import {connectRouter} from 'connected-react-router';
import {createSelector} from 'reselect';

// Selectors
export const getRouter = ({router}) => router;
export const getSearch = createSelector(
  [getRouter],
  ({location: {search}}) => search
);

export const getCategories = createSelector(
  [getSearch],
  (search) => new URLSearchParams(search).getAll('cat')
);

export const getPage = createSelector(
  [getSearch],
  (search) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.has('page') ? Number(searchParams.get('page')) : 1;
});

export default connectRouter;
