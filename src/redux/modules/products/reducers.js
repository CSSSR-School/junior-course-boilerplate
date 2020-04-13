import { minBy, maxBy } from 'csssr-school-utils';
import dataJSON from '../../../components/app/assets/products.json';
import * as types from './types';

const getInitialState = data => {
  const productsCategories = Array.from(
    new Set(data.map(item => item.category))
  );
  return {
    products: {
      filter: {
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
        categories: productsCategories.reduce(
          (acc, category) => ({ ...acc, [category]: { isActive: false } }),
          {}
        )
      },
      list: data
    }
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
        products: {
          filter: {
            ...state.products.filter,
            [groupName]: {
              ...state.products.filter[groupName],
              [fieldName]: fieldData
            }
          },
          list: [
            ...state.products.list
          ]
        }
      };

    case types.UPDATE_PRODUCTS_FILTER_CATEGORIES:
      const { state: historyState } = payload;
      return {
        ...state,
        products: {
          filter: {
            price: {
              ...state.products.filter.price
            },
            discount: {
              ...state.products.filter.discount
            },
            categories: {
              ...state.products.filter.categories,
              ...historyState
            }
          },
          list: [
            ...state.products.list
          ]
        }
      };

    case types.SET_INITIAL_STATE:
      return initialState;

    default:
      return state;
  }
};
