import {createAction, createReducer} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {getPage} from './pagination';
import {
  getMinPrice,
  getMaxPrice,
  getDiscount,
  calcDiscount
} from '../../helpers';
import {PRODUCTS_LIMIT, ActionPrefix} from '../../consts';
import products from '../../products.json';

// Actions creators
export const changeFilter = createAction(`${ActionPrefix.PRODUCT}/CHANGE_FILTER`);
export const setFilterCategories = createAction(`${ActionPrefix.PRODUCT}/SET_FILTER_CATEGORIES`);
export const resetFilter = createAction(`${ActionPrefix.PRODUCT}/RESET_FILTER`);

// Reducer
const initialState = {
  filter: {
    minPrice: getMinPrice(products),
    maxPrice: getMaxPrice(products),
    discount: getDiscount(products),
    categories: []
  },
  productsList: products
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
    .addCase(resetFilter, () => initialState)
    .addDefaultCase((state) => state);
});

// Selectors
export const getProducts = ({product}) => product.productsList;
export const getFilter = ({product}) => product.filter;

export const getFilteredProducts = createSelector(
  [getProducts, getFilter],
  (productsList, {minPrice, maxPrice, discount, categories}) => {
    return productsList.filter(({price, subPriceContent, category}) => {
      const prodDiscount = calcDiscount(price, subPriceContent);
      return (
        price >= minPrice &&
        price <= maxPrice &&
        discount <= prodDiscount &&
        (categories.length === 0 || categories.includes(category))
      )
    });
  }
);

export const getProductsByPage = createSelector(
  [getFilteredProducts, getPage],
  (filteredProductsList, page) => {
    const start = (page - 1) * PRODUCTS_LIMIT;
    const end = PRODUCTS_LIMIT * page;
    return filteredProductsList.slice(start, end);
  }
);

export const getTotalFilteredProducts = createSelector(
  [getFilteredProducts],
  (filteredProductsList) => filteredProductsList.length
);

export const getCategoriesList = createSelector(
  [getProducts],
  (productsList) => [...new Set(productsList.map(({category}) => category))]
);

export default reducer;
