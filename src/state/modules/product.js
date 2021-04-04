import {
  createAction,
  createReducer,
  createAsyncThunk
} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {setFilter, getFilter} from './filter';
import {getCategories, getPage} from './router';
import request from '../../api';
import {PRODUCTS_LIMIT, ActionPrefix} from '../../consts';

// Actions creators
export const changeFilter = createAction(`${ActionPrefix.PRODUCT}/CHANGE_FILTER`);
export const resetFilter = createAction(`${ActionPrefix.PRODUCT}/RESET_FILTER`);

// Async actions
export const fetchProducts = createAsyncThunk(
  `${ActionPrefix.PRODUCT}/FETCH_PRODUCTS`,
  async (_, {dispatch, rejectWithValue}) => {
    try {
      const {products} = await request('/products');
      products.length && dispatch(setFilter(products));
      return products;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Reducer
const initialState = {
  productsList: [],
  loading: true,
  error: null
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchProducts.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.productsList = payload;
    })
    .addCase(fetchProducts.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    })
    .addDefaultCase((state) => state);
});

// Selectors
export const getProducts = ({product}) => product.productsList;
export const getLoading = ({product}) => product.loading;
export const getError = ({product}) => product.error;
export const getProduct = ({product: {productsList}}, prodID) => productsList.find(({id}) => id === prodID);

export const getFilteredProducts = createSelector(
  [getProducts, getFilter, getCategories],
  (productsList, {minPrice, maxPrice, minDiscount}, categories) => {
    return productsList.filter(({price, discount, category}) => {
      return (
        price >= minPrice &&
        price <= maxPrice &&
        discount >= minDiscount &&
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
