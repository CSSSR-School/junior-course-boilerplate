import React, { Component } from 'react';
import propTypes from 'prop-types';

import './products-header.scss';
import {logRender} from '../../utils/log-render';

class ProductsHeader extends Component {
  render() {
    const { classModifier, header } = this.props;
    return <h2 className={`${classModifier}__header`}>{header}</h2>;
  }
}

ProductsHeader.propTypes = {
  classModifier: propTypes.string,
  header: propTypes.string
};

logRender(ProductsHeader);
export default ProductsHeader;
