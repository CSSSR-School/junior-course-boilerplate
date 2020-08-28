import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';
import styles from './Header.module.sass';

class Header extends BaseComponent {
  render() {
    let { children } = this.props;
    return <h2 className={styles.Header}>{children}</h2>;
  }
}

export default Header;
