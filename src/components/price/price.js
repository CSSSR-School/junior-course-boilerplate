import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './price.module.scss';

const Price = ({ price, isPrimary = true }) => (
  <span
    className={classnames(
      'ItemListsprice',
      styles.Price,
      { [styles.PricePrimary]: isPrimary },
      { [styles.PriceSecondary]: !isPrimary }
    )}
  >
    {price.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8381;
  </span>
);

Price.propTypes = {
  price: propTypes.number,
  isPrimary: propTypes.bool
};

export default Price;
