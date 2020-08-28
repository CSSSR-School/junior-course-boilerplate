import React from 'react';
import styles from './Button.module.sass';
import BaseComponent from '../BaseComponent/BaseComponent';

class Button extends BaseComponent {
  render() {
    let { children } = this.props;
    return <button className={styles.Button}>{children}</button>;
  }
}

export default Button;
