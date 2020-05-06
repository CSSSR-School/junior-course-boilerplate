import * as types from './types';

const initialState = {
  list: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case types.FETCH_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true
      };

    case types.FETCH_PRODUCTS_SUCCESS:
      const { list } = payload;

      return {
        ...state,
        list,
        isLoading: false
      };

    case types.FETCH_PRODUCTS_FAILURE:
      const {
        error: { message }
      } = payload;

      return {
        ...state,
        error: message,
        isLoading: false
      };
    default:
      return state;
  }
};
