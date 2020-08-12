import * as actions from './actions';

export function getProducts() {
  return {
      type: actions.GET_PRODUCTS
  };
}

export function setFilter(filterName, value) {
  return {
    type: actions.SET_FILTER,
    payload: {
      filterName,
      value
    }
  }
}
