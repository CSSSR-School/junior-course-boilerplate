import React from 'react';
import propTypes from 'prop-types';
import ProductDetailsContainer from '../../containers/product-details-container';

const ProductDetailsPage = ({ id }) => <ProductDetailsContainer id={id} />;

ProductDetailsPage.propTypes = {
  id: propTypes.number
};

export default ProductDetailsPage;
