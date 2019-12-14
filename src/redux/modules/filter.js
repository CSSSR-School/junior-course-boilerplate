import {maxBy, minBy} from 'csssr-school-utils';
import data from '../../products';
import getArrayFromStringWithCommas from '../../utils/getArrayFromStringWithCommas';

export const RESET_FILTERS = 'filter/RESET_FILTERS';
export const CHANGE_MIN_PRICE = 'filter/CHANGE_MIN_PRICE';
export const CHANGE_MAX_PRICE = 'filter/CHANGE_MAX_PRICE';
export const CHANGE_DISCOUNT = 'filter/CHANGE_DISCOUNT';
export const SELECT_CATEGORY = 'filter/SELECT_CATEGORY';

const searchParams = new URLSearchParams(window.location.search);

const getCategoryList = (data) => {
    const set = data.reduce((arr, item) => arr.add(item.category), new Set());
    return Array.from(set)
};

const initialState = {
    minPrice: minBy(obj => obj.price, data).price,
    maxPrice: maxBy(obj => obj.price, data).price,
    discount: minBy(obj => obj.discount, data).discount,
    categoryList: getCategoryList(data),
    selectedCategories: getArrayFromStringWithCommas(searchParams.get('category')),
};

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

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MIN_PRICE :
            return {...state, minPrice: action.payload};
        case CHANGE_MAX_PRICE :
            return {...state, maxPrice: action.payload};
        case CHANGE_DISCOUNT :
            return {...state, discount: action.payload};
        case SELECT_CATEGORY :
            return {...state, selectedCategories: action.payload};
        case RESET_FILTERS :
            return {
                ...initialState,
                selectedCategories: []
            };
        default:
            return state
    }
}
