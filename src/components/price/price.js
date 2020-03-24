import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './price.scss';
import { logRender } from '../../utils/log-render';

class Price extends Component {
  render() {
    const { value, isPrimary = true } = this.props;
    return (
      <span
        className={classnames(
          'list-item-products__price',
          'price',
          { 'price--primary': isPrimary },
          { 'price--secondary': !isPrimary }
        )}
      >
        {value.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8381;
      </span>
    );
  }
}

Price.propTypes = {
  value: propTypes.number,
  isPrimary: propTypes.bool
};

logRender(Price);

export default Price;
