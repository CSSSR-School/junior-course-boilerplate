import React from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {getProductsByPage} from '../state/modules/product';
import LogRender from '../components/LogRender/LogRender';
import ProductsList from '../components/ProductsList/ProductsList.jsx';

class ProductsListContainer extends LogRender {

  render() {
    const {productsList} = this.props;

    return (
      <ProductsList products={productsList}/>
    )
  }
}

ProductsListContainer.propTypes = {
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

const mapStateToProps = (state) => ({
  productsList: getProductsByPage(state),
});


export default connect(mapStateToProps)(ProductsListContainer);
