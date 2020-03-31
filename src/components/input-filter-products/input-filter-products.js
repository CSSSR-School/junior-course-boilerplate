import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products.module.scss';

class InputFilterProducts extends Component {
  render() {
    const { name, value, isValid, handleChange } = this.props;
    return (
      <input
        className={classnames(
          'filterProductsInput',
          styles.inputFilterProducts,
          {[styles.inputFilterProductsInvalid]: !isValid}
        )}
        type="number"
        value={value}
        name={name}
        onChange={handleChange}
    />
    );
  }
}

InputFilterProducts.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  handleChange: propTypes.func
};

export default InputFilterProducts;
