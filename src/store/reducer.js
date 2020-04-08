import { initialState } from './state';

export const reducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case 'UPDATE_PRODUCTS-FILTER_FIELD':
      const { groupName, fieldName, fieldData } = payload;
      return {
        ...state,
        productsFilter: {
          ...state.productsFilter,
          [groupName]: {
            ...state.productsFilter[groupName],
            [fieldName]: fieldData
          }
        }
      };
    case 'UPDATE_PRODUCTS-FILTER_CATEGORIES':
      const { state: historyState } = payload;
      return {
        ...state,
        productsFilter: {
          price: {
            ...state.productsFilter.price
          },
          discount: {
            ...state.productsFilter.discount
          },
          categories: {
            ...state.productsFilter.categories,
            ...historyState
          }
        }
      };
    case 'SET_INITIAL_STATE':
      const { setHistoryInitialURL } = payload;
      setHistoryInitialURL();

      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
