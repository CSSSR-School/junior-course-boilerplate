import React from 'react';
import styles from './Header.module.sass';

const Header = ({ children }) => <h2 className={styles.Header}>{children}</h2>;

export default Header;
