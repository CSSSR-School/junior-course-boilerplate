import React from 'react';
import { minBy, maxBy } from 'csssr-school-utils';
import products from './products.json';

const DEFAULT_SALE_SIZE = 50;

const getMinPrice = () => minBy(obj => obj.price, products).price;
const getMaxPrice = () => maxBy(obj => obj.price, products).price;

const getPrice = () => {
  return {
    min: getMinPrice(),
    max: getMaxPrice(),
    sale: DEFAULT_SALE_SIZE
  }
}

const getCategories = () => {
  const allProductsCategories = products.map(product => product.category);
  const categories = Array.from(new Set(allProductsCategories));

  const filters = {};

  categories.forEach((category, index) => {
    filters[category] = {
      name: category,
      checked: false,
    };
  })

  return filters;
};

const defaultPrice = getPrice();
const defaultCategories = getCategories();

const defaultFieldsContextValue = {
  price: defaultPrice,
  categories: defaultCategories,
}
const FieldsContext = React.createContext(defaultFieldsContextValue);

export { FieldsContext, defaultPrice, defaultCategories };

