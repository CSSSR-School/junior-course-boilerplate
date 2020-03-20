import React from 'react';
import propTypes from 'prop-types';

import './products-header.scss';

const ProductsHeader = ({header}) => {
return <h2 className="products__header">{header}</h2>;
};

ProductsHeader.propTypes = {
  header: propTypes.string
};


export default ProductsHeader;
