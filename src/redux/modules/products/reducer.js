import * as types from './types';
import { minBy, maxBy } from 'csssr-school-utils';

import dataJSON from '../../../components/app/assets/products.json';

const productsCategories = Array.from(
  new Set(dataJSON.map(item => item.category))
);
const initialState = {
  filter: {
    price: {
      min: {
        value: minBy(item => item.price, dataJSON).price,
        isValid: true
      },
      max: {
        value: maxBy(item => item.price, dataJSON).price,
        isValid: true
      }
    },
    discount: {
      total: {
        value: minBy(item => item.discount, dataJSON).discount,
        isValid: true
      }
    },
    categories: productsCategories.reduce(
      (acc, category) => ({ ...acc, [category]: { isActive: false } }),
      {}
    )
  },
  list: dataJSON
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case types.RESET_FILTER_STATE:
      return initialState;

    case types.UPDATE_FILTER_FIELD:
      const { groupName, fieldName, fieldData } = payload;

      return {
        ...state,
        filter: {
          ...state.filter,
          [groupName]: {
            ...state.filter[groupName],
            [fieldName]: fieldData
          }
        },
        list: [...state.list]
      };

    case types.UPDATE_FILTER_CATEGORIES:
      const { categories } = payload;

      return {
        ...state,
        filter: {
          price: {
            ...state.filter.price
          },
          discount: {
            ...state.filter.discount
          },
          categories: {
            ...categories
          }
        },
        list: [...state.list]
      };

    default:
      return state;
  }
};
