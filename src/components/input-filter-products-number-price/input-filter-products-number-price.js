import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products-number-price.module.scss';
import { withInputProductsNumberHandler } from '../hoc-helpers';
import { Context } from '../context';

class InputFilterProductsNumberPrice extends PureComponent {
  render() {
    const { isValid, onChange: handleChange, ...rest } = this.props;
    return (
      <Context.Consumer>
        {({ updateProductsFilterField }) => (
          <input
            className={classnames(
              'filterProductsInput',
              styles.inputFilterProductsNumberPrice,
              { [styles.inputFilterProductsNumberPriceInvalid]: !isValid }
            )}
            onChange={event =>
              handleChange(event, 'price', updateProductsFilterField)
            }
            {...rest}
          />
        )}
      </Context.Consumer>
    );
  }
}

InputFilterProductsNumberPrice.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  onChange: propTypes.func
};

export default withInputProductsNumberHandler(InputFilterProductsNumberPrice);
