import React, { Component } from 'react';
import propTypes from 'prop-types';

import './input-filter-products.scss';
import {logRender} from '../../utils/log-render';

class InputFilterProducts extends Component {
  render() {
    const { classModifier, name, defaultValue } = this.props;
    const baseClassName = `input-${classModifier}`;
    return (
      <input
        className={`${classModifier}__input ${baseClassName}`}
        type="number"
        name={name}
        defaultValue={defaultValue}
      />
    );
  }
}

InputFilterProducts.propTypes = {
  classModifier: propTypes.string
};

logRender(InputFilterProducts);
export default InputFilterProducts;
