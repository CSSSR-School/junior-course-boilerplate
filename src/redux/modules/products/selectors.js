import { createSelector } from 'reselect';

const getProductsFilter = ({ products: { filter } }) => {
  return filter;
};

const getProductsList = ({ products: { list } }) => {
  return list;
};

const getProductsFilterCategories = state => {
  const {
    products: {
      filter: { categories }
    }
  } = state;
  return categories;
};

const getProductsFilterActiveCategoriesList = createSelector(
  getProductsFilterCategories,
  categories =>
    Object.keys(categories).filter(category => categories[category].isActive)
);

const getFilteredProductsList = createSelector(
  [getProductsFilter, getProductsFilterActiveCategoriesList, getProductsList],
  (filterParams, activeCategoriesList, productsList) => {
    const {
      price: {
        min: { value: minValue },
        max: { value: maxValue }
      },
      discount: {
        total: { value: discountValue }
      }
    } = filterParams;
    const filteredProducts = productsList.filter(
      ({ price, discount: productDiscount }) =>
        price >= minValue &&
        price <= maxValue &&
        productDiscount >= discountValue
    );

    if (activeCategoriesList.length !== 0) {
      return filteredProducts.filter(({ category }) =>
        activeCategoriesList.includes(category)
      );
    }
    return filteredProducts;
  }
);

export {
  getProductsFilter,
  getProductsList,
  getProductsFilterActiveCategoriesList,
  getFilteredProductsList,
};
