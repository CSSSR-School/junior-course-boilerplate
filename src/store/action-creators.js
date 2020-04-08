import {
  UPDATE_PRODUCTS_FILTER_FIELD,
  UPDATE_PRODUCTS_FILTER_CATEGORIES,
  SET_INITIAL_STATE
} from './action-types';

export const updateProductsFilterField = payload => ({
  type: UPDATE_PRODUCTS_FILTER_FIELD,
  payload
});
export const updateProductsFilterCategories = payload => ({
  type: UPDATE_PRODUCTS_FILTER_CATEGORIES,
  payload
});
export const setInitialState = () => ({
  type: SET_INITIAL_STATE
});
