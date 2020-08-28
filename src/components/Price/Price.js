import React from 'react';
import cx from 'classnames';
import styles from './Price.module.sass';

const Price = ({ value, isOriginalPrice = true }) => {
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
};

export default Price;
