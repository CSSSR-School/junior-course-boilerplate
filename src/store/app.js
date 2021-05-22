const slice = (state) => state.app;

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const defaultState = {
  currentPage: parseInt(new URLSearchParams(window.location.search).get('page')) || 1,
  productsPerPage: 6,
};

export const productsPerPageSelector = (state) => slice(state).productsPerPage;
export const currentPageSelector = (state) => slice(state).currentPage;

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export const setCurrentPageAction = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});
