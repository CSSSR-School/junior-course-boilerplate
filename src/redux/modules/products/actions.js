import axios from 'axios';
import * as types from './types';
import { fillFilterWithData } from '../filter/actions';

const API = 'https://course-api.csssr.school/';

const PARAM = 'products';

export const fetchProductsStarted = () => ({
  type: types.FETCH_PRODUCTS_STARTED
});

export const fetchProductsSuccess = payload => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload
});

export const fetchDataFailure = payload => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload
});

export const fetchProducts = () => {
  return async dispatch => {
    dispatch(fetchProductsStarted());

    try {
      const {
        data: { products = [] }
      } = await axios.get(`${API}${PARAM}`);

      dispatch(fetchProductsSuccess({ list: products }));
      dispatch(fillFilterWithData({ list: products }));
    } catch (error) {
      dispatch(fetchDataFailure({ error }));
    }
  };
};
