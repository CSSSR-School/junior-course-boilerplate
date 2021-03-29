import {configureStore} from '@reduxjs/toolkit';
import {productReducer,connectRouter} from './modules';
import {history} from '../history';

const reducers = {
  product: productReducer,
  router: connectRouter(history)
};

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production'
});

