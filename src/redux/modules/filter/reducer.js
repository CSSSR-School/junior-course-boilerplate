import * as types from './types';
import { minBy, maxBy } from 'csssr-school-utils';

const initialState = {
  price: {
    min: {
      value: 0,
      isValid: false
    },
    max: {
      value: 0,
      isValid: false
    }
  },
  discount: {
    total: {
      value: 100,
      isValid: false
    }
  },
  categories: {}
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

    case types.FILL_FILTER_WITH_DATA:
      const { list } = payload;

      const minPrice = minBy(item => item.price, list).price;

      const maxPrice = maxBy(item => item.price, list).price;

      const discount = minBy(item => item.discount, list).discount;

      const categories = Array.from(
        new Set(list.map(item => item.category))
      ).reduce(
        (acc, category) => ({ ...acc, [category]: { isActive: false } }),
        {}
      );

      initialState.price = {
        ...initialState.price,
        min: {
          ...initialState.price.min,
          value: minPrice,
          isValid: minPrice > 0
        },
        max: {
          ...initialState.price.max,
          value: maxPrice,
          isValid: maxPrice > 0
        }
      };

      initialState.discount = {
        ...initialState.discount,
        total: {
          value: discount,
          isValid: discount < 100
        }
      };

      initialState.categories = {
        ...initialState.categories,
        ...categories,
      }

      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
};
