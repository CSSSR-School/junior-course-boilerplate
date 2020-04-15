import * as types from './types';

export const updatePaginationCurrentPage = payload => ({
  type: types.UPDATE_PAGINATION_CURRENT_PAGE,
  payload
});
export const makePaginationControlsActive = () => ({
  type: types.MAKE_PAGINATION_CONTROLS_ACTIVE,
});
export const makePaginationControlsInactive = () => ({
  type: types.MAKE_PAGINATION_CONTROLS_INACTIVE,
});
export const makePaginationControlPrevActive = () => ({
  type: types.MAKE_PAGINATION_CONTROL_PREV_ACTIVE,
});
export const makePaginationControlPrevInactive = () => ({
  type: types.MAKE_PAGINATION_CONTROL_PREV_INACTIVE,
});
export const makePaginationControlNextActive = () => ({
  type: types.MAKE_PAGINATION_CONTROL_NEXT_ACTIVE,
});
export const makePaginationControlNextInactive = () => ({
  type: types.MAKE_PAGINATION_CONTROL_NEXT_INACTIVE,
});
export const shiftPaginationPageBoundsBack = () => ({
  type: types.SHIFT_PAGINATION_PAGE_BOUNDS_BACK,
});
export const shiftPaginationPageBoundsForward = () => ({
  type: types.SHIFT_PAGINATION_PAGE_BOUNDS_FORWARD,
});
