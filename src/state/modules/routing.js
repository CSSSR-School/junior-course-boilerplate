import {createAction, createReducer} from '@reduxjs/toolkit';
import {ActionPrefix} from '../../consts';

// Actions creators
export const pushState = createAction(
  `${ActionPrefix.ROUTING}/CHANGE_PARAMS`,
  function prepare(params) {
    window.history.pushState(null, null, params);
    return {payload: params}
  }
);

// Reducer
const initialState = {
  query: window.location.search ? window.location.search : '?page=1'
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(pushState, (state, {payload}) => {
      state.query = payload
    })
    .addDefaultCase((state) => state);
});

// Selectors
export const getQuery = ({routing}) => routing.query;

export default reducer;
