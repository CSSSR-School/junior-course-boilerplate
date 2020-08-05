import React from 'react';
import products from './products.json';

const DEFAULT_SALE_SIZE = 50;
const DEFAULT_CHECKED_FILTER_INDEX = 0;

const getMinPrice = () => products.reduce((a,b) => a.price < b.price ? a : b).price;

const getMaxPrice = () => products.reduce((a,b) => a.price > b.price ? a : b).price;

const getPrice = () => {
  return {
    min: getMinPrice(),
    max: getMaxPrice(),
    sale: DEFAULT_SALE_SIZE
  }
}

const getFilters = () => {
  const allProductsCategories = products.map(product => product.category);
  const categories = Array.from(new Set(allProductsCategories));
  const filters = {};

  categories.forEach((category, index) => {
    filters[category] = {
      name: category,
      checked: index === DEFAULT_CHECKED_FILTER_INDEX
    };
  })

  return filters;
};

const defaultPrice = getPrice();
const defaultFilters = getFilters();

const defaultFieldsContextValue = {
  price: defaultPrice,
  filters: defaultFilters,
}
const FieldsContext = React.createContext(defaultFieldsContextValue);

export { FieldsContext, defaultPrice, defaultFilters };

