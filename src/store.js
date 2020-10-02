import { createStore } from 'redux';
import { minBy, maxBy } from 'csssr-school-utils';
import reducer from './reducer';
import products from './products.json';

const DEFAULT_DISCOUNT_SIZE = 50;
const DEFAULT_CHECKED_CATEGORIES = [];

const getMinPrice = () => minBy(obj => obj.price, products).price;
const getMaxPrice = () => maxBy(obj => obj.price, products).price;

const getPrice = () => {
  return {
    min: getMinPrice(),
    max: getMaxPrice(),
    discount: DEFAULT_DISCOUNT_SIZE
  }
}

const getAllCategories = () => {
  const allProductsCategories = products.map(product => product.category);
  return Array.from(new Set(allProductsCategories));
}

export const initialState = {
  products: products,
  price: getPrice(),
  categories: getAllCategories(),
  checkedCategories: DEFAULT_CHECKED_CATEGORIES,
};

const store = createStore(reducer, initialState);

export default store;
