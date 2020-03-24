import React, { Component } from 'react';
import propTypes from 'prop-types';

import './products-header.scss';
import {logRender} from '../../utils/log-render';

class ProductsHeader extends Component {
  render() {
    const { header } = this.props;
    return <h2 className="products__header">{header}</h2>;
  }
}

ProductsHeader.propTypes = {
  header: propTypes.string
};

logRender(ProductsHeader);
export default ProductsHeader;
