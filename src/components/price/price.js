import React from 'react';
import propTypes from 'prop-types';

import './price.scss';


const Price = ({ value, isPrimary = true }) => {
  return (
    <span
      className={isPrimary ? 'price price--primary' : 'price price--secondary'}
    >
      {value.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8399;
    </span>
  );
};

Price.propTypes = {
  value: propTypes.number,
  clsName: propTypes.string
};

export default Price;
