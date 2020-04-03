import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import CSSSRSchoolInputDiscount from 'csssr-school-input-discount';

import styles from './input-filter-products-discount.module.scss';
import { withInputProductsNumberState } from '../hoc-helpers';

class InputFilterProductsDiscount extends PureComponent {
  render() {
    const {
      name,
      value,
      isValid,
      onChange: handleChange,
      parentClassName,
      ...rest
    } = this.props;
    return (
      <section
        className={classnames(
          parentClassName,
          styles.inputFilterProductsDiscount,
          {
            [styles.inputFilterProductsDiscountInvalid]: !isValid
          }
        )}
      >
        <CSSSRSchoolInputDiscount
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </section>
    );
  }
}

InputFilterProductsDiscount.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  handleChange: propTypes.func,
  parentClassName: propTypes.string
};

export default withInputProductsNumberState(InputFilterProductsDiscount);
