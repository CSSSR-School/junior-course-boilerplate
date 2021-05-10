export const getFilteredProducts = (products, {
  minPrice,
  maxPrice,
  discount,
  category,
}) => {
  return products.filter(
    (product) => {
      const fitsCategory = category ? product.category === category : true;
      const fitsPrice = product.price >= minPrice && product.price <= maxPrice;
      const fitsDiscount = discount ? product.discount > discount : true;
      return fitsPrice && fitsCategory && fitsDiscount;
    }
  );
};

export const formatPrice = (price) => {
  return price.toLocaleString() + ' ₽';
};
