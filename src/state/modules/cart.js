import {createAction, createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import request from '../../api';
import {ActionPrefix} from '../../consts';
import {toggleItemInArray} from '../../helpers';

// Actions creators
export const changeCart = createAction(`${ActionPrefix.CART}/CHANGE_CART`);
export const resetCart = createAction(`${ActionPrefix.CART}/RESET_CART`);

// Async actions
export const saveCart = createAsyncThunk(
  `${ActionPrefix.CART}/SAVE_CART`,
  async (_, {rejectWithValue}) => {
    try {
      await request(
        '/save',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Reducer
const initialState = {
  cartList: [],
  cartStatus: {
    pending: false,
    success: false,
    error: false,
  }
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(saveCart.pending, (state) => {
      state.cartStatus.pending = true;
      state.cartStatus.success = false;
    })
    .addCase(saveCart.fulfilled, (state) => {
      state.cartStatus.pending = false;
      state.cartStatus.success = true;
      state.cartStatus.error = false;
    })
    .addCase(saveCart.rejected, (state) => {
      state.cartStatus.pending = false;
      state.cartStatus.success = false;
      state.cartStatus.error = true;
    })
    .addCase(changeCart, (state, {payload}) => {
      state.cartList = toggleItemInArray(state.cartList, payload);
      state.cartStatus.pending = false;
      state.cartStatus.success = false;
      state.cartStatus.error = false;
    })
    .addCase(resetCart, () => initialState)
    .addDefaultCase((state) => state);
});

// Selectors
export const getCart = ({cart}) => cart.cartList;
export const getCartStatus = ({cart}) => cart.cartStatus;
export const getTotalCartItems = createSelector(
  [getCart],
  (cartList) => cartList.length
);

export default reducer;
