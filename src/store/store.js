import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import domain from './domain';
import filters from './filters';
import app from './app';

import { productsSelector } from './domain';
import {
  currentPageSelector,
  productsPerPageSelector,
} from './app';
import {
  categorySelector,
  discountSelector,
  minPriceSelector,
  maxPriceSelector,
} from './filters';

const getCurrentPageProductsSlice = (products, page, productsPerPage) => {
  const start = productsPerPage * (page - 1);
  const end = start + productsPerPage;
  return products.slice(start, end);
};

export const productsAndPagesSelector = createSelector(
  productsSelector,
  categorySelector,
  discountSelector,
  minPriceSelector,
  maxPriceSelector,
  currentPageSelector,
  productsPerPageSelector,
  (products, category, discount, minPrice, maxPrice, currentPage, productsPerPage) => {
    const filteredProducts = products.filter(
      (product) => {
        const fitsCategory = category === 'all' ? true : product.category === category;
        const fitsPrice = product.price >= minPrice && product.price <= maxPrice;
        const fitsDiscount = discount ? product.discount > discount : true;
        return fitsPrice && fitsCategory && fitsDiscount;
      }
    );

    const pagesCount = Math.ceil(filteredProducts.length / productsPerPage);
    // since currentPage for a new filter can be bigger than the new overall page count
    const currentPageForThisFilter = Math.min(currentPage, pagesCount);

    const productsToRender = getCurrentPageProductsSlice(
      filteredProducts,
      currentPageForThisFilter,
      productsPerPage,
    );

    return {
      products: productsToRender,
      currentPage: currentPageForThisFilter,
      pagesCount,
    }
  }
);

export default combineReducers({
  domain,
  filters,
  app,
});
