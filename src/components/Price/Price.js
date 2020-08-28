import React from 'react';
import cx from 'classnames';
import BaseComponent from '../BaseComponent/BaseComponent';
import styles from './Price.module.sass';

class Price extends BaseComponent {
  render() {
    let { value, isOriginalPrice } = this.props;
    const formatter = new Intl.NumberFormat('ru', {
      style: 'currency',
      currency: 'Rub'
    });

    return (
      <span
        className={cx([styles.Price], {
          [styles['Price--secondary']]: isOriginalPrice === false
        })}
      >
        {formatter.format(value)}
      </span>
    );
  }
}

Price.defaultProps = { isOriginalPrice: true };

export default Price;
