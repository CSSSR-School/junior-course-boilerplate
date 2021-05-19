import { minBy, maxBy } from 'csssr-school-utils';

import products from '../products.json';

const defaultState = {
  minPrice: minBy(product => product.price, products).price,
  maxPrice: maxBy(product => product.price, products).price,
  category: null,
  discount: 0,
  products,
  categories: products.reduce(
    (acc, product) => acc.includes(product.category) ? acc : [...acc, product.category],
    [],
  ),
};

const SET_MIN_PRICE_FILTER = 'SET_MIN_PRICE_FILTER';
const SET_MAX_PRICE_FILTER = 'SET_MAX_PRICE_FILTER';
const SET_DISCOUNT_FILTER = 'SET_DISCOUNT_FILTER';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
const RESET_FILTERS = 'RESET_FILTERS';

export const setMinPriceFilterAction = (payload) => ({
  type: SET_MIN_PRICE_FILTER,
  payload,
});

export const setMaxPriceFilterAction = (payload) => ({
  type: SET_MAX_PRICE_FILTER,
  payload,
});

export const setDiscountFilterAction = (payload) => ({
  type: SET_DISCOUNT_FILTER,
  payload,
});

export const setCategoryFilterAction = (payload) => ({
  type: SET_CATEGORY_FILTER,
  payload,
});

export const resetFiltersAction = () => ({
  type: RESET_FILTERS,
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MIN_PRICE_FILTER:
      return {
        ...state,
        minPrice: action.payload,
      }
    case SET_MAX_PRICE_FILTER:
      return {
        ...state,
        maxPrice: action.payload,
      }
    case SET_DISCOUNT_FILTER:
      return {
        ...state,
        discount: action.payload,
      }
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        category: state.category !== action.payload
          ? action.payload
          : null,
      }
    case RESET_FILTERS:
      return defaultState;
    default:
      return state;
  }
};
