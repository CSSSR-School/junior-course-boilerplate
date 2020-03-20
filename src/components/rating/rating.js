import React from 'react';
import propTypes from 'prop-types';

import './rating.scss';
import SvgIcon from '../svg-icon';

const Rating = ({isFilled}) => {
  return (
    <div className={isFilled ? 'rating rating--is-filled' : 'rating'}>
      <SvgIcon isFilled={isFilled}/>
    </div>
  )
};

Rating.propTypes = {
  isFilled: propTypes.bool
};

export default Rating;
