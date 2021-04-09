import {connect} from 'react-redux';
import {getProductsByPage} from '../state/modules/product';
import ProductsList from '../components/ProductsList/ProductsList.jsx';

const mapStateToProps = (state) => ({
  products: getProductsByPage(state)
});

export default connect(mapStateToProps)(ProductsList);
