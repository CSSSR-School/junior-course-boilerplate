import React from 'react';
import propTypes from 'prop-types';

import './price.scss';

const Price = ({price, clsName}) => {
return <span className={clsName}>{price.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8399;</span>;
};

Price.propTypes = {
  price: propTypes.number,
  clsName: propTypes.string,
};

export default Price;
