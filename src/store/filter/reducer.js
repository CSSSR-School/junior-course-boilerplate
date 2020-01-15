import * as types from './types';
import * as productsTypes from '../products/types';
import {maxBy, minBy} from 'csssr-school-utils';

export const getCategoryList = (products) => {
    const set = products.reduce((arr, item) => arr.add(item.category), new Set());
    return Array.from(set)
};

const initialState = {
    minPrice: 0,
    maxPrice: 0,
    discount: 0,
    categoryList: [],
    productsMinPrice: 0,
    productsMaxPrice: 0,
    productsDiscount: 0,
    productsCategoryList: []
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
                ...state,
                minPrice: state.productsMinPrice,
                maxPrice: state.productsMaxPrice,
                discount: state.productsDiscount,
                categoryList: state.productsCategoryList
            };
        case productsTypes.LOAD_PRODUCTS_SUCCESS :
            return {
                ...state,
                minPrice: minBy(obj => obj.price, action.payload).price,
                maxPrice: maxBy(obj => obj.price, action.payload).price,
                discount: minBy(obj => obj.discount, action.payload).discount,
                categoryList: getCategoryList(action.payload),

                productsMinPrice: minBy(obj => obj.price, action.payload).price,
                productsMaxPrice: maxBy(obj => obj.price, action.payload).price,
                productsDiscount: minBy(obj => obj.discount, action.payload).discount,
                productsCategoryList: getCategoryList(action.payload),
            };
        default:
            return state
    }
};

export default reducer;
