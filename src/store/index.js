import {createStore} from 'redux'
import {maxBy, minBy} from 'csssr-school-utils'
import data from '../products.json';
import {
    CHANGE_DISCOUNT,
    CHANGE_MAX_PRICE,
    CHANGE_MIN_PRICE,
    CHANGE_PAGINATION_PAGE,
    RESET_FILTERS,
    SELECT_CATEGORY
} from './actions';


const searchParams = new URLSearchParams(window.location.search);


const getSelectedCategoryFromString = (string) => {
    return string ? string.split(',') : []
};

const getPaginationActiveFromString = (string) => {
    return string ? string.split(',') : []
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
    selectedCategories: searchParams.get('category') || [],
    paginationActivePage: searchParams.get('page') || 1,
    itemPerPage: 8
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
        case CHANGE_PAGINATION_PAGE :
            return {
                ...state,
                paginationActivePage: action.payload
            };

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
