import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input-filter-price.module.scss';
import { withInputFilterNumberHandler } from '../hoc-helpers';

const InputFilterPrice = ({
  isValid,
  updateFilterField,
  handleChange,
  ...restProps
}) => (
  <input
    className={classnames(styles.InputFilter, styles.InputFilterPrice, {
      [styles.InputFilterInvalid]: !isValid
    })}
    onChange={event => handleChange(event, 'price')}
    {...restProps}
  />
);

InputFilterPrice.propTypes = {
  name: propTypes.string,
  value: propTypes.number,
  isValid: propTypes.bool,
  handleChange: propTypes.func,
  updateFilterField: propTypes.func
};

export default withInputFilterNumberHandler(InputFilterPrice);
