import dataJSON from '../../../components/app/assets/products.json';

const initialState = dataJSON;

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
