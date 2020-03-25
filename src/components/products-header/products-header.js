import React from 'react';
import propTypes from 'prop-types';

import './products-header.scss';
import LogRender from '../log-render';

class ProductsHeader extends LogRender {
  render() {
    const { header } = this.props;
    return <h2 className="products__header">{header}</h2>;
  }
}

ProductsHeader.propTypes = {
  header: propTypes.string
};

export default ProductsHeader;
