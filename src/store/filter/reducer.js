import * as types from './types';
import {maxBy, minBy} from 'csssr-school-utils';
import data from '../../products';
import getArrayFromStringWithCommas from '../../utils/getArrayFromStringWithCommas';
export const searchParams = new URLSearchParams(window.location.search);

export const getCategoryList = (data) => {
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


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MIN_PRICE :
            return {...state, minPrice: action.payload};
        case types.CHANGE_MAX_PRICE :
            return {...state, maxPrice: action.payload};
        case types.CHANGE_DISCOUNT :
            return {...state, discount: action.payload};
        case types.SELECT_CATEGORY :
            return {...state, selectedCategories: action.payload};
        case types.RESET_FILTERS :
            return {
                ...initialState,
                selectedCategories: []
            };
        default:
            return state
    }
};

export default reducer;
