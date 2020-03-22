import React, { Component } from 'react';
import propTypes from 'prop-types';

import './price.scss';
import {logRender} from '../../utils/log-render';

class Price extends Component {
  render() {
    const {classModifier, value, isPrimary = true} = this.props;
    return (
      <span
        className={
          isPrimary
            ? `${classModifier}__price price price--primary`
            : `${classModifier}__price price price--secondary`
        }
      >
        {value.toLocaleString('en-US').replace(/,/g, ' ')}&nbsp;&#8381;
      </span>
    );
  }
}

Price.propTypes = {
  classModifier: propTypes.string,
  value: propTypes.number,
  isPrimary: propTypes.bool
};

logRender(Price);

export default Price;
