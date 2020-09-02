export function filterProducts(products, filters) {
  let filteredProducts = products;

  if (parseInt(filters.minPrice, 10) > 0) {
    filteredProducts = filterByMinPrice(filteredProducts, filters.minPrice);
  }

  if (parseInt(filters.maxPrice, 10) > 0) {
    filteredProducts = filterByMaxPrice(filteredProducts, filters.maxPrice);
  }

  return filteredProducts;
}

function filterByMinPrice(products, minVal) {
  return products.filter((product) => product.price >= minVal);
}

function filterByMaxPrice(products, maxValue) {
  return products.filter((product) => product.price <= maxValue);
}
