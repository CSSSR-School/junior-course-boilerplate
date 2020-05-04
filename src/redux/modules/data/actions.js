import axios from 'axios';
import * as types from './types';
import { fillFilterWithData } from '../filter/actions';
import { delay } from '../../../helpers';

const API = 'https://course-api.csssr.school/';

const PARAM_PRODUCTS = 'products';

// const PARAM_EMPTY = 'empty';

// const PARAM_ERROR = 'error';

const INTERVAL = 3000;

export const fetchDataStarted = () => ({
  type: types.FETCH_DATA_STARTED
});

export const fetchDataSuccess = payload => ({
  type: types.FETCH_DATA_SUCCESS,
  payload
});

export const fetchDataFailure = payload => ({
  type: types.FETCH_DATA_FAILURE,
  payload
});

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchDataStarted());

    try {
      await delay(INTERVAL);

      const {
        data: { products = [] }
      } = await axios.get(`${API}${PARAM_PRODUCTS}`);

      dispatch(fetchDataSuccess({ data: products }));
      dispatch(fillFilterWithData({ list: products }));
    } catch (error) {
      dispatch(fetchDataFailure({ error }));
    }
  };
};
