import * as types from './types';

export const updatePaginationCurrentPage = payload => ({
  type: types.UPDATE_PAGINATION_CURRENT_PAGE,
  payload
});

export const shiftPaginationPageBoundsBack = () => ({
  type: types.SHIFT_PAGINATION_PAGE_BOUNDS_BACK,
});

export const shiftPaginationPageBoundsForward = () => ({
  type: types.SHIFT_PAGINATION_PAGE_BOUNDS_FORWARD,
});
