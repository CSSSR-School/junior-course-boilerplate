import React, {memo} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {getProduct} from '../state/modules/product';
import Product from '../components/Product/Product.jsx';
import NoProduct from '../components/NoProduct/NoProduct.jsx';

const ProductContainer = ({product}) =>  {
  return (
    <>
      {
        product ?
          <Product product={product}/>
          :
          <NoProduct title='Товар не найден'/>
      }
    </>
  );
};

ProductContainer.propTypes = {
  product: pt.oneOfType([PropValidator.PRODUCT_INFO.isRequired, pt.oneOf([undefined]).isRequired]),
  prodID: pt.number.isRequired,
};

const mapStateToProps = (state, {prodID}) => ({
  product: getProduct(state, prodID)
});


export default connect(mapStateToProps)(memo(ProductContainer));
