export const RESET_FILTERS = 'RESET_FILTERS';
export const CHANGE_MIN_PRICE = 'CHANGE_MIN_PRICE';
export const CHANGE_MAX_PRICE = 'CHANGE_MAX_PRICE';
export const CHANGE_DISCOUNT = 'CHANGE_DISCOUNT';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const resetFilter = () => {
    return {
        type: RESET_FILTERS
    }
};

export const changeMinPrice = (value) => {
    return {
        type: CHANGE_MIN_PRICE,
        payload: value
    }
};

export const changeMaxPrice = (value) => {
    return {
        type: CHANGE_MAX_PRICE,
        payload: value
    }
};


export const changeDiscount = (value) => {
    return {
        type: CHANGE_DISCOUNT,
        payload: value
    }
};

export const selectCategory = (value) => {
    return {
        type: SELECT_CATEGORY,
        payload: value
    }
};

