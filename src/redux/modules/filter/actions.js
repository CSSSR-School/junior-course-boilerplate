import * as types from './types';

export const resetFilter = () => ({
  type: types.RESET_FILTER
});

export const updateFilterField = payload => ({
  type: types.UPDATE_FILTER_FIELD,
  payload
});

export const updateFilterCategories = payload => ({
  type: types.UPDATE_FILTER_CATEGORIES,
  payload
});
