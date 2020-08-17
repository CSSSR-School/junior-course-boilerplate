import React from 'react';
import { minBy, maxBy } from 'csssr-school-utils';
import products from './products.json';

const DEFAULT_SALE_SIZE = 50;
const DEFAULT_CHECKED_CATEGORIES = [];

const getMinPrice = () => minBy(obj => obj.price, products).price;
const getMaxPrice = () => maxBy(obj => obj.price, products).price;

const getPrice = () => {
  return {
    min: getMinPrice(),
    max: getMaxPrice(),
    sale: DEFAULT_SALE_SIZE
  }
}

const getAllCategories = () => {
  const allProductsCategories = products.map(product => product.category);
  return Array.from(new Set(allProductsCategories));
}

const defaultPrice = getPrice();
const allCategories = getAllCategories();
const defaultFieldsContextValue = {
  price: defaultPrice,
  categories: allCategories,
  checkedCategories: DEFAULT_CHECKED_CATEGORIES,
}
const FieldsContext = React.createContext(defaultFieldsContextValue);

export { FieldsContext, defaultPrice, allCategories, DEFAULT_CHECKED_CATEGORIES};

