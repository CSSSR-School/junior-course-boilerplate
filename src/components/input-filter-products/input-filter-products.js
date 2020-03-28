import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products.module.scss';
import LogRender from '../log-render';

class InputFilterProducts extends LogRender {
  state = {
    isValid: true,
  };
  handleInputChange = ({target: {value}}) => {
    if (Number(value) <= 0) {
      this.setState({isValid: false});
    } else {
      this.setState({isValid: true});
    }
  };
  render() {
    const { name, initialValue } = this.props;
    return (
      <input
        className={classnames(
          'filterProductsInput',
          styles.inputFilterProducts,
          {[styles.inputFilterProductsInvalid]: !this.state.isValid},
        )}
        type="number"
        defaultValue={initialValue}
        name={name}
        onChange={this.handleInputChange}
    />
    );
  }
}

InputFilterProducts.propTypes = {
  name: propTypes.string,
  initialValue: propTypes.number
};

export default InputFilterProducts;
