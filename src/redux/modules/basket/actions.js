import * as types from './types';

export const saveBasketStarted = () => ({
  type: types.SAVE_BASKET_STARTED
});

export const saveBasketFailure = payload => ({
  type: types.SAVE_BASKET_FAILURE,
  payload
});

export const saveBasketSuccess = payload => ({
  type: types.SAVE_BASKET_SUCCESS,
  payload
});

export const removeItemFromBasket = payload => ({
  type: types.REMOVE_ITEM_FROM_BASKET,
  payload
});

export const emptyBasket = () => ({
  type: types.EMPTY_BASKET,
});

export const saveBasket = (url, id) => {
  return async dispatch => {
    dispatch(saveBasketStarted());

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ id }),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.ok) {
        dispatch(saveBasketSuccess({ id }));
      } else {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
      }
    } catch (error) {
      dispatch(saveBasketFailure({ error }));
    }
  };
};
