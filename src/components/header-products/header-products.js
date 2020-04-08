import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './header-products.module.scss';

const HeaderProducts = ({ header }) => (
  <h2 className={classnames(styles.headerProducts)}>{header}</h2>
);

HeaderProducts.propTypes = {
  header: propTypes.string
};

export default HeaderProducts;
