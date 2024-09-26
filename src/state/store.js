import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  productReducer,
  filterReducer,
  cartReducer,
  connectRouter
} from './modules';
import {history} from '../history';

const reducers = {
  product: productReducer,
  filter: filterReducer,
  cart: cartReducer,
  router: connectRouter(history)
};

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: process.env.NODE_ENV !== 'production'
});

