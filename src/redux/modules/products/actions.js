import * as types from './types';
import { fillFilterWithData } from '../filter/actions';

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

export const fetchProducts = url => {
  return async dispatch => {
    dispatch(fetchProductsStarted());

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Could not fetch ${url}, received ${response.status}`
          );
        }
      })
      .then(data => {
        const { products } = data;

        dispatch(fetchProductsSuccess({ list: products }));

        return data;
      })
      .then(data => {
        const { products } = data;

        dispatch(fillFilterWithData({ list: products }));
      })
      .catch(error => {
        dispatch(fetchDataFailure({ error }));
      });
  };
};
