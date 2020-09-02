import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';

import * as actions from './actions';
import allProducts from '../../static/products.json';

export const initialState = {
  app: {
    maxVisibleProducts: 3,
    products: [],
    filters: {
      minPrice: null,
      maxPrice: null
    }
  }
}

const appReducer = (state = initialState.app, action) => {
  switch(action.type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        products: allProducts
      };

    case actions.SET_FILTER:
      const { filterName, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [filterName]: value
        }
      }

    default:
      return state;
  }
}

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer
});

export default createRootReducer;
