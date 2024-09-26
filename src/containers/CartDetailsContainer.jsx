import {connect} from 'react-redux';
import {getCartProducts} from '../state/modules/cart';
import CartDetails from '../components/CartDetails/CartDetails.jsx';

const mapStateToProps = (state) => ({
  cartProductsList: getCartProducts(state)
});

export default connect(mapStateToProps)(CartDetails);
