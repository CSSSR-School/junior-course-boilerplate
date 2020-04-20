import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import CSSSRSchoolInputDiscount from 'csssr-school-input-discount';

import styles from './input-filter-discount.module.scss';
import { withInputFilterNumberHandler } from '../hoc-helpers';

const InputFilterDiscount = ({
  isValid,
  parentClassName,
  updateFilterField,
  handleChange,
  ...restProps
}) => (
  <section
    className={classnames(
      parentClassName,
      styles.inputFilter,
      styles.inputFilterDiscount,
      {
        [styles.inputFilterInvalid]: !isValid
      }
    )}
  >
    <CSSSRSchoolInputDiscount
      onChange={event => handleChange(event, 'discount')}
      {...restProps}
    />
  </section>
);

InputFilterDiscount.propTypes = {
  title: propTypes.string,
  name: propTypes.string,
  value: propTypes.number,
  parentClassName: propTypes.string,
  isValid: propTypes.bool,
  handleChange: propTypes.func,
  updateFilterField: propTypes.func,
};

export default withInputFilterNumberHandler(InputFilterDiscount);
