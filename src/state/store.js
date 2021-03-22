import {configureStore} from '@reduxjs/toolkit';
import {productReducer, paginationReducer, routingReducer} from './modules';

const reducers = {
  product: productReducer,
  pagination: paginationReducer,
  routing: routingReducer
}

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});

