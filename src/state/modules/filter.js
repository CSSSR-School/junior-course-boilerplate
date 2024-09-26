import {createAction, createReducer} from '@reduxjs/toolkit';
import {
  getMinPrice,
  getMaxPrice,
  getDiscount
} from '../../helpers';
import {ActionPrefix} from '../../consts';

// Actions creators
export const changeFilter = createAction(`${ActionPrefix.FILTER}/CHANGE_FILTER`);
export const setFilter = createAction(
  `${ActionPrefix.FILTER}/SET_FILTERS`,
  (products) => {
    return {
      payload: {
        minPrice: getMinPrice(products),
        maxPrice: getMaxPrice(products),
        minDiscount: getDiscount(products)
      }
    };
  }
);

// Reducer
const initialState = {
  minPrice: 0,
  maxPrice: 0,
  minDiscount: 0
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(setFilter, (_, {payload}) => payload)
    .addCase(changeFilter, (state, {payload: {name, value}}) => {
      state[name] = value;
    })
    .addDefaultCase((state) => state);
});

// Selectors
export const getFilter = ({filter: {minPrice, maxPrice, minDiscount}}) => ({
  minPrice,
  maxPrice,
  minDiscount
});


export default reducer;
