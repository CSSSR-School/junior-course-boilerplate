import {createSelector} from 'reselect';
import {calcDiscount} from '../helpers';

export const getProducts = ({productsList}) => productsList;
export const getFilter = ({filter}) => filter;
export const getCategories = ({categoriesList}) => categoriesList;
export const getPage = ({page}) => page;

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
