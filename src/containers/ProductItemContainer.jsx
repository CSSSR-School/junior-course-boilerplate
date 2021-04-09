import {connect} from 'react-redux';
import ProductItem from '../components/ProductItem/ProductItem.jsx';
import {
  changeCart,
  getCartStatus,
  getProductInCart
} from '../state/modules/cart.js';

const mapStateToProps = (state, {product}) => ({
  isInCart: getProductInCart(state, product.id),
  cartStatus: getCartStatus(state)
});

export default connect(mapStateToProps, {changeCart})(ProductItem);
