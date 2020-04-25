import * as types from './types';
import { minBy, maxBy } from 'csssr-school-utils';

import dataJSON from '../../../components/app/assets/products.json';

const dataJSONCategories = Array.from(
  new Set(dataJSON.map(item => item.category))
);
const initialState = {
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
  categories: dataJSONCategories.reduce(
    (acc, category) => ({ ...acc, [category]: { isActive: false } }),
    {}
  )
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case types.RESET_FILTER:
      return initialState;

    case types.UPDATE_FILTER_FIELD:
      const { groupName, fieldName, fieldData } = payload;

      return {
        ...state,
        [groupName]: {
          ...state[groupName],
          [fieldName]: fieldData
        }
      };

    case types.UPDATE_FILTER_CATEGORIES:
      const { categories } = payload;

      return {
        ...state,
        price: {
          ...state.price
        },
        discount: {
          ...state.discount
        },
        categories: {
          ...categories
        }
      };

    default:
      return state;
  }
};
