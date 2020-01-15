import * as types from './types';

const initialState = {
    products: [],
    isLoading: false,
    isError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS_START:
            return {...state, isLoading: true, isError: false};
        case types.LOAD_PRODUCTS_FAIL:
            return {...state, isLoading: false, isError: true};
        case types.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload
            };

        default:
            return state
    }
};

export default reducer;
