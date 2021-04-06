import React, {memo} from 'react';
import {PropValidator} from '../../prop-validator';
import ProductTitle from '../ProductTitle/ProductTitle.jsx';
import ProductItemContainer from '../../containers/ProductItemContainer.jsx';

const Product = ({product}) => {
  const {name} = product;

  return (
    <>
      <ProductTitle>
        {name}
      </ProductTitle>
      <ProductItemContainer
        product={product}
        isDetailMode
      />
    </>
  );
};

Product.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired
};

export default memo(Product);
