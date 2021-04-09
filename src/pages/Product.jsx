import React, {memo} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {getProduct} from '../state/modules/product';
import Title from '../components/Title/Title.jsx';
import ProductDetails from '../components/ProductDetails/ProductDetails.jsx';
import NoProduct from '../components/NoProduct/NoProduct';

const Product = ({product}) => {

  if (!product) {
    return (
      <NoProduct
        title='Продукт не найден'
        isLinkable
      />
    );
  }

  const {name} = product;

  return (
    <div className="product">
      <Title isLinkable>{name}</Title>
      <ProductDetails product={product}/>
    </div>
  );
};

Product.propTypes = {
  product: pt.oneOfType([PropValidator.PRODUCT_INFO.isRequired, pt.oneOf([undefined]).isRequired]),
};

const mapStateToProps = (state, {match: {params: {prodID}}}) => ({
  product: getProduct(state, parseInt(prodID, 10))
});

export default connect(mapStateToProps)(memo(Product));
