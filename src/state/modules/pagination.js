import {createAction, createReducer} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {getFilteredProducts} from './product';
import {PRODUCTS_LIMIT, ActionPrefix} from '../../consts';

// Actions creators
export const changePage = createAction(`${ActionPrefix.PAGINATION}/CHANGE_PAGE`);
export const resetPagination = createAction(`${ActionPrefix.PAGINATION}/RESET_PAGINATION`);

// Reducer
const initialState = {
  page: 1
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(changePage, (state, {payload}) => {
      state.page = payload
    })
    .addCase(resetPagination, () => initialState)
    .addDefaultCase((state) => state);
});

// Selectors
export const getPage = ({pagination}) => pagination.page;
export const getTotalPages = createSelector(
  [(state) => getFilteredProducts(state)],
  (productsList) => Math.ceil(productsList.length / PRODUCTS_LIMIT)
)

export default reducer;
