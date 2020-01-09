import * as types from './types';
import {maxBy, minBy} from 'csssr-school-utils';
import products from '../../products';

export const getCategoryList = (products) => {
    const set = products.reduce((arr, item) => arr.add(item.category), new Set());
    return Array.from(set)
};

const initialState = {
    minPrice: minBy(obj => obj.price, products).price,
    maxPrice: maxBy(obj => obj.price, products).price,
    discount: minBy(obj => obj.discount, products).discount,
    categoryList: getCategoryList(products),
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MIN_PRICE :
            return {...state, minPrice: action.payload};
        case types.CHANGE_MAX_PRICE :
            return {...state, maxPrice: action.payload};
        case types.CHANGE_DISCOUNT :
            return {...state, discount: action.payload};
        case types.RESET_FILTERS :
            return {
                ...initialState,
            };
        default:
            return state
    }
};

export default reducer;
