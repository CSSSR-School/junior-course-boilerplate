import React from 'react';

import propTypes from 'prop-types';

import classnames from 'classnames';

import styles from './header.module.scss';

const Header = ({ header }) => (
  <h2 className={classnames(styles.Header)}>{header}</h2>
);

Header.propTypes = {
  value: propTypes.string
};

export default Header;
