import * as types from './types'
const ITEMS_PER_PAGE = 2;
const searchParams = new URLSearchParams(window.location.search);

const initialState = {
    paginationActivePage: searchParams.get('page') || 1,
    itemsPerPage: ITEMS_PER_PAGE
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_PAGINATION_PAGE :
            return {
                ...state,
                paginationActivePage: action.payload
            };
        default:
            return state
    }
};
