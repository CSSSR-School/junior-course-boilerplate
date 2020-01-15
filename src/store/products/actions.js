import * as types from './types';

export const loadProductsStart = () => {
    return {
        type: types.LOAD_PRODUCTS_START
    }
};

export const loadProductsSuccess = (value) => {
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        payload: value
    }
};

export const loadProductsFail = (value) => {
    return {
        type: types.LOAD_PRODUCTS_FAIL,
        payload: value
    }
};

