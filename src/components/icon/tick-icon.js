import React from 'react';
import propTypes from 'prop-types';

const TickIcon = ({ width = 18, height = 14 }) => (
  <svg width={width} height={height}>
    <title>Tick</title>
    <path
      d="M5.6 10.6L1.4 6.4 0 7.8l5.6 5.6 12-12L16.2 0 5.6 10.6z"
      fill="var(--fill, black)"
    />
  </svg>
);

TickIcon.propTypes = {
  width: propTypes.number,
  height: propTypes.number
};

export default TickIcon;
