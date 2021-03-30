import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductRatingItem.module.css';
import {RatingIcon} from '../Icons';

const ProductRatingItem = ({isFilled}) => {

  return (
    <div className={s.productRating}>
      <RatingIcon isFilled={isFilled}/>
    </div>
  );
};

ProductRatingItem.propTypes = {
  isFilled: pt.bool.isRequired
};

export default memo(ProductRatingItem);


