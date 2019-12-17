import * as types from './types'

export const changePaginationPage = (value) => {
    return {
        type: types.CHANGE_PAGINATION_PAGE,
        payload: value
    }
};
