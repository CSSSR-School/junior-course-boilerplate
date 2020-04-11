import { minBy, maxBy } from 'csssr-school-utils';
import dataJSON from '../../../components/app/assets/products.json';
import * as types from './types';

const getInitialState = data => {
  const listCategories = Array.from(new Set(data.map(item => item.category)));
  return {
    productsFilter: {
      price: {
        min: {
          value: minBy(item => item.price, data).price,
          isValid: true
        },
        max: {
          value: maxBy(item => item.price, data).price,
          isValid: true
        }
      },
      discount: {
        total: {
          value: minBy(item => item.discount, data).discount,
          isValid: true
        }
      },
      categories: listCategories.reduce(
        (acc, category) => ({ ...acc, [category]: { isActive: false } }),
        {}
      )
    },
    productsList: data
  };
};

const initialState = getInitialState(dataJSON);

export default (state = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case types.UPDATE_PRODUCTS_FILTER_FIELD:
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

    case types.UPDATE_PRODUCTS_FILTER_CATEGORIES:
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

    case types.SET_INITIAL_STATE:
      return initialState;

    default:
      return state;
  }
};
