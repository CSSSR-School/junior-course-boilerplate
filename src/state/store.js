import {configureStore} from '@reduxjs/toolkit';
import {
  productReducer,
  filterReducer,
  connectRouter
} from './modules';
import {history} from '../history';

const reducers = {
  product: productReducer,
  filter: filterReducer,
  router: connectRouter(history)
};

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});

