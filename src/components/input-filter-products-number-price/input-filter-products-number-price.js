import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products-number-price.module.scss';
import { withInputProductsNumberHandler } from '../hoc-helpers';

class InputFilterProductsNumberPrice extends PureComponent {
  render() {
    const {
      isValid,
      updateProductsFilterField,
      onChange: handleChange,
      ...rest
    } = this.props;
    return (
      <input
        className={classnames(
          'filterProductsInput',
          styles.inputFilterProductsNumberPrice,
          { [styles.inputFilterProductsNumberPriceInvalid]: !isValid }
        )}
        onChange={event => handleChange(event, 'price')}
        {...rest}
      />
    );
  }
}

InputFilterProductsNumberPrice.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  onChange: propTypes.func,
  updateProductsFilterField: propTypes.func
};

export default withInputProductsNumberHandler(InputFilterProductsNumberPrice);
