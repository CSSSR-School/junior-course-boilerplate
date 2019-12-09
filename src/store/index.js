import {createStore} from 'redux'
import {maxBy, minBy} from 'csssr-school-utils'
import data from '../products.json';
import {CHANGE_DISCOUNT, CHANGE_MAX_PRICE, CHANGE_MIN_PRICE, RESET_FILTERS, SELECT_CATEGORY} from './actions';

const urlFilterParams = decodeURIComponent(window.location.pathname.substr(1));
const getSelectedCategoryFromUrl = (url) => {
    return url ? url.split(',') : []
};
const getCategoryList = (data) => {
    const set = data.reduce((arr, item) => arr.add(item.category), new Set());
    return Array.from(set)
};

const initialState = {
    minPrice: minBy(obj => obj.price, data).price,
    maxPrice: maxBy(obj => obj.price, data).price,
    discount: minBy(obj => obj.discount, data).discount,
    categoryList: getCategoryList(data),
    selectedCategories: getSelectedCategoryFromUrl(urlFilterParams)
};


const reducer = (state, action) => {
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
};

export const store = createStore(reducer, initialState);
