import * as types from './types';

const initialState = {
  currentPage: 1,
  itemsPerPage: 6,
  upperPageBound: 3,
  lowerPageBound: 0,
  pageBound: 3
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case types.UPDATE_PAGINATION_CURRENT_PAGE:
      const { currentPage } = payload;
      return {
        ...state,
        currentPage
      };

    case types.SHIFT_PAGINATION_PAGE_BOUNDS_FORWARD:
      return {
        ...state,
        upperPageBound:
        state.upperPageBound + state.pageBound,
      lowerPageBound:
        state.lowerPageBound + state.pageBound
      };

    case types.SHIFT_PAGINATION_PAGE_BOUNDS_BACK:
      return {
        ...state,
        upperPageBound:
          state.upperPageBound - state.pageBound,
        lowerPageBound:
          state.lowerPageBound - state.pageBound
      };

    default:
      return state;
  }
};
