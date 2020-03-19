import React from 'react';
import propTypes from 'prop-types';

import './price.scss';

const primaryStyles = {
  marginRight: 10,
  fontSize: 20
};
const secondaryStyles = {
  fontSize: 12
};

const Price = ({ value, isPrimary }) => {
  return (
    <span
      className={'price'}
      style={isPrimary ? primaryStyles : secondaryStyles}
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
