import * as types from './types';

export const resetFilter = () => {
    return {
        type: types.RESET_FILTERS
    }
};

export const changeMinPrice = (value) => {
    return {
        type: types.CHANGE_MIN_PRICE,
        payload: value
    }
};

export const changeMaxPrice = (value) => {
    return {
        type: types.CHANGE_MAX_PRICE,
        payload: value
    }
};

export const changeDiscount = (value) => {
    return {
        type: types.CHANGE_DISCOUNT,
        payload: value
    }
};

