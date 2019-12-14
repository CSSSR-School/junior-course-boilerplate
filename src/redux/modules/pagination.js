export const CHANGE_PAGINATION_PAGE = 'pagination/CHANGE_PAGINATION_PAGE';
const ITEMS_PER_PAGE = 2;

const searchParams = new URLSearchParams(window.location.search);

const initialState = {
    paginationActivePage: searchParams.get('page') || 1,
    itemsPerPage: ITEMS_PER_PAGE
};

export const changePaginationPage = (value) => {
    return {
        type: CHANGE_PAGINATION_PAGE,
        payload: value
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PAGINATION_PAGE :
            return {
                ...state,
                paginationActivePage: action.payload
            };
        default:
            return state
    }
};
