import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {getProductsByPage} from '../state/modules/product';
import ProductsList from '../components/ProductsList/ProductsList.jsx';

class ProductsListContainer extends PureComponent {

  render() {
    const {productsList} = this.props;

    return (
      <ProductsList products={productsList}/>
    );
  }
}

ProductsListContainer.propTypes = {
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

const mapStateToProps = (state) => ({
  productsList: getProductsByPage(state),
});


export default connect(mapStateToProps)(ProductsListContainer);
