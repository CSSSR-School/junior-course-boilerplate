import * as types from './types';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case types.FETCH_DATA_STARTED:
      return {
        ...state,
        isLoading: true
      };

    case types.FETCH_DATA_SUCCESS:
      const { data } = payload;

      return {
        ...state,
        items: data,
        isLoading: false
      };

    case types.FETCH_DATA_FAILURE:
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
