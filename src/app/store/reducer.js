import * as actions from './actions';
import allProducts from '../../static/products.json';

export const initialState = {
  products: [],
  filters: {
    minPrice: null,
    maxPrice: null
  }
}

export function reducer(state, action) {
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

      default: return state;
  }
}
