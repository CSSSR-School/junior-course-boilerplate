import { createSelector } from 'reselect';

const getRouter = ({ router }) => router;

const getRouterSearch = createSelector(
  getRouter,
  ({ location: { search } }) => search
);

export { getRouter, getRouterSearch };
