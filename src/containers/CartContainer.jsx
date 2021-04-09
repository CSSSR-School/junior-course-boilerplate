import {connect} from 'react-redux';
import {
  saveCart,
  resetCart,
  getProductsTotalPrice,
  getTotalCartItems,
  getCartStatus,
  getCart
} from '../state/modules/cart';
import Cart from '../components/Cart/Cart.jsx';

const mapStateToProps = (state) => ({
  cartList: getCart(state),
  totalCartItems: getTotalCartItems(state),
  sum: getProductsTotalPrice(state),
  cartStatus: getCartStatus(state)
});

export default connect(mapStateToProps, {resetCart, saveCart})(Cart);
