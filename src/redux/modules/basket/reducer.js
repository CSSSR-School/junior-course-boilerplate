import * as types from './types';

const initialState = {
  status: {
    isSending: false,
    isSuccessful: false,
    error: null
  },
  list: [],
};

export default (state = initialState, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case types.SAVE_BASKET_STARTED:
      return {
        ...state,
        status: {
          ...state.status,
          isSending: true,
          isSuccessful: false
        }
      };

    case types.SAVE_BASKET_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isSuccessful: true,
          isSending: false
        },
      };

    case types.SAVE_BASKET_FAILURE:
      const {
        error: { message }
      } = payload;

      return {
        ...state,
        status: {
          ...state.status,
          error: message
        }
      };

      case types.ADD_ITEM_TO_BASKET:
        return {
          ...state,
          list: Array.from(new Set([...state.list, payload.id])),
        };

    case types.REMOVE_ITEM_FROM_BASKET:
      return {
        ...state,
        list: state.list.filter(value => value !== payload.id)
      };

    case types.EMPTY_BASKET:
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};
