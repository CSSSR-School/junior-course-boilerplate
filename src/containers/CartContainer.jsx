import React, {memo} from 'react';
import pt from 'prop-types';
import {connect} from 'react-redux';
import {
  saveCart,
  resetCart,
  getCart,
  getCartStatus,
  getTotalCartItems
} from '../state/modules/cart';
import Cart from '../components/Cart/Cart.jsx';

const CartContainer = ({
  cartList,
  cartStatus,
  totalCartItems,
  saveCart,
  resetCart
}) => {

  return (
    <Cart
      cartList={cartList}
      cartStatus={cartStatus}
      totalCartItems={totalCartItems}
      onSaveCart={saveCart}
      onResetCart={resetCart}
    />
  );
};

CartContainer.propTypes = {
  cartList: pt.arrayOf(pt.node).isRequired,
  cartStatus: pt.object.isRequired,
  totalCartItems: pt.number.isRequired,
  saveCart: pt.func.isRequired,
  resetCart: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  cartList: getCart(state),
  cartStatus: getCartStatus(state),
  totalCartItems: getTotalCartItems(state)
});

export default connect(mapStateToProps, {resetCart, saveCart})(memo(CartContainer));
