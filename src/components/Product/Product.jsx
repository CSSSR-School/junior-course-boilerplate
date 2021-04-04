import React from 'react';
import {PropValidator} from '../../prop-validator';
import ProductItem from '../ProductItem/ProductItem.jsx';
import ProductTitle from '../ProductTitle/ProductTitle.jsx';

const Product = ({product}) => {
  const {name} = product;

  return (
    <>
      <ProductTitle>
        {name}
      </ProductTitle>
      <ProductItem
        product={product}
        isDetailMode
      />
    </>
  );
};

Product.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired
};

export default Product;
