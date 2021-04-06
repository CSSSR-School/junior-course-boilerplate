import React, {memo} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {getProductsByPage} from '../state/modules/product';
import ProductsList from '../components/ProductsList/ProductsList.jsx';

const ProductsListContainer = ({productsList}) => {
  return (
    <ProductsList products={productsList}/>
  );
};

ProductsListContainer.propTypes = {
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

const mapStateToProps = (state) => ({
  productsList: getProductsByPage(state)
});

export default connect(mapStateToProps)(memo(ProductsListContainer));
