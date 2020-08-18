import React from 'react';
import propTypes from 'prop-types';

const BasketIcon = ({ width = 14, height = 12 }) => (
  <svg width={width} height={height}>
    <title>Basket</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="var(--fill, black)"
      d="M10.80671,4.65333L7.88666,0.28C7.76,0.09333,7.54666,0,7.33333,0
	C7.12,0,6.90666,0.09333,6.78,0.28667L3.86,4.65333H0.66666C0.3,4.65333,0,4.95333,0,5.32C0,5.38,0.00667,5.44,0.02667,5.5
	L1.72,11.68002c0.15333,0.56,0.66666,0.9733,1.28,0.9733h8.66671c0.6133,0,1.1266-0.4133,1.2866-0.9733L14.64671,5.5l0.02-0.18
	c0-0.36667-0.3-0.66667-0.6667-0.66667H10.80671z M5.33333,4.65333l2-2.93333l1.99998,2.93333H5.33333z M6,8.65333
	c0,0.73334,0.6,1.33329,1.33333,1.33329s1.33333-0.59995,1.33333-1.33329c0-0.73333-0.6-1.33333-1.33333-1.33333S6,7.92,6,8.65333z"
    />
  </svg>
);

BasketIcon.propTypes = {
  width: propTypes.number,
  height: propTypes.number
};

export default BasketIcon;
