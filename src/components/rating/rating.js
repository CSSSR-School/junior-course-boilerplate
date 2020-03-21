import React from 'react';
import propTypes from 'prop-types';

import './rating.scss';
import SvgIconStar from '../svg-icon-star';

const Rating = ({isFilled}) => {
  return (
    <div className={isFilled ? 'rating rating--is-filled' : 'rating'}>
      <SvgIconStar isFilled={isFilled}/>
    </div>
  )
};

Rating.propTypes = {
  isFilled: propTypes.bool
};

export default Rating;
