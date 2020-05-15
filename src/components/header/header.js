import React from 'react';
import propTypes from 'prop-types';
import styles from './header.module.scss';

const Header = ({ header }) => <h2 className={styles.Header}>{header}</h2>;

Header.propTypes = {
  value: propTypes.string
};

export default Header;
