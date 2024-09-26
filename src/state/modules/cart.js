import {createAction, createReducer, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import request from '../../api';
import {getProducts} from './product';
import {ActionPrefix} from '../../consts';
import {toggleItemInArray} from '../../helpers';

// Actions creators
export const changeCart = createAction(`${ActionPrefix.CART}/CHANGE_CART`);
export const resetCart = createAction(`${ActionPrefix.CART}/RESET_CART`);

// Async actions
export const saveCart = createAsyncThunk(
  `${ActionPrefix.CART}/SAVE_CART`,
  async (cartList, {rejectWithValue}) => {
    try {
      await request(
        '/save',
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(cartList),
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
export const getTotalCartItems = ({cart}) => cart.cartList.length;
export const getProductInCart = ({cart}, prodID) => cart.cartList.includes(prodID);

export const getCartProducts = createSelector(
  [getProducts, getCart],
  (productsList, cartList) => {
    return productsList.filter(({id}) => cartList.includes(id));
  }
);

export const getProductsTotalPrice = createSelector(
  [getCartProducts],
  (productsList) => productsList.reduce((acc, {price}) => acc + price, 0)
);

export default reducer;
