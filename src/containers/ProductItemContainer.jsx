import React, {memo} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import ProductItem from '../components/ProductItem/ProductItem.jsx';
import {
  changeCart,
  getCartStatus,
  getCart
} from '../state/modules/cart.js';

const ProductItemContainer = ({
  product,
  cartList,
  cartStatus,
  isDetailMode = false,
  changeCart
}) => {

  return (
    <ProductItem
      product={product}
      isInCart={cartList.includes(product.id)}
      cartStatus={cartStatus}
      isDetailMode={isDetailMode}
      onChangeCart={changeCart}
    />
  );
};

ProductItemContainer.propTypes = {
  product: PropValidator.PRODUCT_INFO.isRequired,
  cartList: pt.arrayOf(pt.node).isRequired,
  cartStatus: pt.object.isRequired,
  isDetailMode: pt.bool,
  changeCart: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  cartList: getCart(state),
  cartStatus: getCartStatus(state)
});

export default connect(mapStateToProps, {changeCart})(memo(ProductItemContainer));
