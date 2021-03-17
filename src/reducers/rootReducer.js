import {createAction, createReducer} from '@reduxjs/toolkit';
import {
  getMinPrice,
  getMaxPrice,
  getDiscount,
  getCategories
} from '../helpers';
import products from '../products.json';

export const changeFilter = createAction('changeFilter');
export const setFilterCategories = createAction('setFilterCategories');
export const resetFilter = createAction('resetFilter');
export const changePage = createAction('changePage');

const initialState = {
  filter: {
    minPrice: getMinPrice(products),
    maxPrice: getMaxPrice(products),
    discount: getDiscount(products),
    categories: []
  },
  categoriesList: getCategories(products),
  productsList: products,
  filteredProductsList: [],
  page: 1
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(changeFilter, (state, {payload: {name, value}}) => {

      if (name === 'categories') {
        const {categories} = state.filter;
        const itemIndex = categories.findIndex((item) => item === value);

        state.filter[name] = itemIndex !== -1 ?
          [
            ...categories.slice(0, itemIndex),
            ...categories.slice(itemIndex + 1)
          ]
          :
          [...categories, value];
        return;
      }

      state.filter[name] = value;
    })
    .addCase(setFilterCategories, (state, {payload}) => {
      state.filter.categories = payload;
    })
    .addCase(changePage, (state, {payload}) => {
      state.page = payload
    })
    .addCase(resetFilter, () => initialState)
    .addDefaultCase((state) => state);
});

export default reducer;
