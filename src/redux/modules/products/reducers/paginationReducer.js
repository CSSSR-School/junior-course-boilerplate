import * as types from '../types';

const initialState = {
  currentPage: 1,
  itemsPerPage: 6,
  upperPageBound: 3,
  lowerPageBound: 0,
  isPrevActive: false,
  isNextActive: true,
  pageBound: 3
};

export const paginationReducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case types.UPDATE_PAGINATION_CURRENT_PAGE:
      const { currentPage } = payload;
      return {
        ...state,
        currentPage
      };

    case types.MAKE_PAGINATION_CONTROLS_ACTIVE:
      return {
        ...state,
        isPrevActive: true,
        isNextActive: true
      };

    case types.MAKE_PAGINATION_CONTROLS_INACTIVE:
      return {
        ...state,
        isPrevActive: false,
        isNextActive: false
      };

    case types.MAKE_PAGINATION_CONTROL_PREV_ACTIVE:
      return {
        ...state,
        isPrevActive: true
      };

    case types.MAKE_PAGINATION_CONTROL_PREV_INACTIVE:
      return {
        ...state,
        isPrevActive: false
      };

    case types.MAKE_PAGINATION_CONTROL_NEXT_ACTIVE:
      return {
        ...state,
        isNextActive: true
      };

    case types.MAKE_PAGINATION_CONTROL_NEXT_INACTIVE:
      return {
        ...state,
        isNextActive: false
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
