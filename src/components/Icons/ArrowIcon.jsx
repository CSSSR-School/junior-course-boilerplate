import React, {memo} from 'react';
import pt from 'prop-types';

const ArrowIcon = ({width = 18, height = 12}) => {
  return (
    <svg width={width} height={height}>
      <title>Arrow</title>
      <path
        d='M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5z'
        fill='var(--fill, #323c48)'
      />
    </svg>
  );
};

ArrowIcon.propTypes = {
  width: pt.number,
  height: pt.number
};

export default memo(ArrowIcon);
