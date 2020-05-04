import * as types from './types';

export const resetFilter = () => ({
  type: types.RESET_FILTER
});

export const updateFilterField = payload => ({
  type: types.UPDATE_FILTER_FIELD,
  payload
});

export const fillFilterWithData = payload => ({
  type: types.FILL_FILTER_WITH_DATA,
  payload
});

// export const passDataToFilterReducer = () => {
//   return (dispatch, getState) => {
//     const {
//       data: { list }
//     } = getState();

//     dispatch(fillFilterWithData({list}));
//   };
// };

// export const fillFilterWithData = payload => ({
//   type: types.FILL_FILTER_WITH_DATA,
//   payload
// });

// export const fetchData = () => {
//   return async dispatch => {
//     dispatch(fetchDataStarted());

//     try {
//       const {
//         data: { products }
//       } = await axios.get(API);

//       dispatch(fetchDataSuccess({ data: products }));
//     } catch (error) {
//       dispatch(fetchDataFailure({ error }));
//     }
//   };
// };
