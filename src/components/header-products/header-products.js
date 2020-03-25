import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './header-products.module.scss';
import LogRender from '../log-render';

class HeaderProducts extends LogRender {
  render() {
    const { header } = this.props;
    return <h2 className={classnames(styles.headerProducts)}>{header}</h2>;
  }
}

HeaderProducts.propTypes = {
  header: propTypes.string
};

export default HeaderProducts;
