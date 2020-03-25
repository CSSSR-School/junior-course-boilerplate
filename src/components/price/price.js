import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './price.scss';
import LogRender from '../log-render';

class Price extends LogRender {
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

export default Price;
