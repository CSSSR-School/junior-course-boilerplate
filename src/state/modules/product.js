import {createAction, createReducer} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {getCategories, getPage} from './router';
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
export const resetFilter = createAction(`${ActionPrefix.PRODUCT}/RESET_FILTER`);

// Reducer
const initialState = {
  filter: {
    minPrice: getMinPrice(products),
    maxPrice: getMaxPrice(products),
    discount: getDiscount(products)
  },
  productsList: products
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(changeFilter, (state, {payload: {name, value}}) => {
      state.filter[name] = value;
    })
    .addCase(resetFilter, () => initialState)
    .addDefaultCase((state) => state);
});

// Selectors
export const getProducts = ({product}) => product.productsList;
export const getFilter = ({product}) => product.filter;
export const getProduct = ({product: {productsList}}, prodID) => productsList.find(({id}) => id === prodID);

export const getFilteredProducts = createSelector(
  [getProducts, getFilter, getCategories],
  (productsList, {minPrice, maxPrice, discount}, categories) => {
    return productsList.filter(({price, subPriceContent, category}) => {
      const prodDiscount = calcDiscount(price, subPriceContent);
      return (
        price >= minPrice &&
        price <= maxPrice &&
        discount <= prodDiscount &&
        (categories.length === 0 || categories.includes(category))
      );
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
