import { createSelector } from 'reselect';

const getProductsFilter = ({ productsFilter }) => {
  return productsFilter;
};

const getProductsFilterCategories = state => {
  const { categories } = getProductsFilter(state);
  return categories;
};

const getProductsFilterActiveCategoriesList = createSelector(
  getProductsFilterCategories,
  categories =>
    Object.keys(categories).filter(category => categories[category].isActive)
);

const getProductsList = ({ productsList }) => {
  return productsList;
};

const filterProductsList = createSelector(
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
  filterProductsList
};
