import products from '../products.json';

const slice = (state) => state.domain;

const defaultState = {
  products,
  categories: products.reduce(
    (acc, product) => acc.includes(product.category) ? acc : [...acc, product.category],
    [],
  ),
};

export const productsSelector = (state) => slice(state).products;
export const categoriesSelector = (state) => slice(state).categories;

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

