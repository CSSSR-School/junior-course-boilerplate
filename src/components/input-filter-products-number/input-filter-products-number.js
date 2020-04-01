import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products-number.module.scss';
import { withInputNumberState } from '../hoc-helpers';

class InputFilterProductsNumber extends PureComponent {
  render() {
    const { name, value, isValid, onChange: handleChange } = this.props;
    return (
      <input
        className={classnames(
          'filterProductsInput',
          styles.inputFilterProductsNumber,
          { [styles.inputFilterProductsNumberInvalid]: !isValid }
        )}
        name={name}
        value={value}
        onChange={handleChange}
      />
    );
  }
}

InputFilterProductsNumber.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  handleChange: propTypes.func
};

export default withInputNumberState(InputFilterProductsNumber);
