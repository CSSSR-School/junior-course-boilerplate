import React, {memo} from 'react';
import {PropValidator} from '../../prop-validator';
import ProductItemContainer from '../../containers/ProductItemContainer.jsx';

const ProductDetails = ({product}) => {
  return (
    <ProductItemContainer
      product={product}
      isDetailMode
    />
  );
};

ProductDetails.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired
};

export default memo(ProductDetails);
