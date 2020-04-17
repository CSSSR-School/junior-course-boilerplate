import * as types from './types';

export const resetState = () => ({
  type: types.RESET_STATE
});
export const updateFilterField = payload => ({
  type: types.UPDATE_FILTER_FIELD,
  payload
});
export const updateFilterCategories = payload => ({
  type: types.UPDATE_FILTER_CATEGORIES,
  payload
});
