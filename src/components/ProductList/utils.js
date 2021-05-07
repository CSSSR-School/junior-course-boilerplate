export const getFilteredProducts = (products, minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

export const formatPrice = (price) => {
  return price.toLocaleString() + ' ₽';
};
