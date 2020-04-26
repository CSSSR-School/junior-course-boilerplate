import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './product-rating.module.scss';
import IconProductRating from '../icon-product-rating';

const ProductRating = ({isFilled}) => (
  <div
    className={
      classnames(
        styles.ProductRating,
        {[styles.ProductRatingIsFilled]: isFilled},
      )
    }
  >
    <IconProductRating isFilled={isFilled} />
  </div>
);

ProductRating.propTypes = {
  isFilled: propTypes.bool
};

export default ProductRating;
