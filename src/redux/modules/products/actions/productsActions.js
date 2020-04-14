import * as types from '../types';

export const setInitialState = () => ({
  type: types.SET_INITIAL_STATE
});
export const updateProductsFilterField = payload => ({
  type: types.UPDATE_PRODUCTS_FILTER_FIELD,
  payload
});
export const updateProductsFilterCategories = payload => ({
  type: types.UPDATE_PRODUCTS_FILTER_CATEGORIES,
  payload
});
