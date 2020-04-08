import { initialState } from './state';
import {
  UPDATE_PRODUCTS_FILTER_FIELD,
  UPDATE_PRODUCTS_FILTER_CATEGORIES,
  SET_INITIAL_STATE
} from './action-types';

export const reducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case UPDATE_PRODUCTS_FILTER_FIELD:
      const { groupName, fieldName, fieldData } = payload;
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          [groupName]: {
            ...state.productsFilter[groupName],
            [fieldName]: fieldData
          }
        }
      };

    case UPDATE_PRODUCTS_FILTER_CATEGORIES:
      const { state: historyState } = payload;
      return {
        ...state,
        productsFilter: {
          price: {
            ...state.productsFilter.price
          },
          discount: {
            ...state.productsFilter.discount
          },
          categories: {
            ...state.productsFilter.categories,
            ...historyState
          }
        }
      };

    case SET_INITIAL_STATE:
      return initialState;

    default:
      return state;
  }
};
