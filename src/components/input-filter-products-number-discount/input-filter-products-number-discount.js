import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import CSSSRSchoolInputDiscount from 'csssr-school-input-discount';

import styles from './input-filter-products-number-discount.module.scss';
import { withInputProductsNumberHandler } from '../hoc-helpers';

const InputFilterProductsNumberDiscount = ({
  isValid,
  parentClassName,
  updateProductsFilterField,
  onChange: handleChange,
  ...rest
}) => (
  <section
    className={classnames(
      parentClassName,
      styles.inputFilterProductsNumberDiscount,
      {
        [styles.inputFilterProductsNumberDiscountInvalid]: !isValid
      }
    )}
  >
    <CSSSRSchoolInputDiscount
      onChange={event => handleChange(event, 'discount')}
      {...rest}
    />
  </section>
);

InputFilterProductsNumberDiscount.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  onChange: propTypes.func,
  updateProductsFilterField: propTypes.func,
  parentClassName: propTypes.string
};

export default withInputProductsNumberHandler(
  InputFilterProductsNumberDiscount
);
