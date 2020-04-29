import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './product-rating.module.scss';
import Icon from '../icon';

const ProductRating = ({ isFilled }) => (
  <div
    className={classnames(styles.ProductRating, {
      [styles.ProductRatingIsFilled]: isFilled
    })}
  >
    <Icon name="rating" isFilled={isFilled} />
  </div>
);

ProductRating.propTypes = {
  isFilled: propTypes.bool
};

export default ProductRating;
