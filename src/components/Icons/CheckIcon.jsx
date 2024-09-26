import React from 'react';
import pt from 'prop-types';

const CheckIcon = ({width = 18, height = 14}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.99999 11.2001L1.79999 7.0001L0.399994 8.4001L5.99999 14.0001L18 2.0001L16.6 0.600098L5.99999 11.2001Z'
        fill='black'
      />
    </svg>
  );
};

CheckIcon.propTypes = {
  width: pt.number,
  height: pt.number
};

export default CheckIcon;
