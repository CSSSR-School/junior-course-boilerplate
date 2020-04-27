import React from 'react';

import propTypes from 'prop-types';

import classnames from 'classnames';

import styles from './input-filter-category.module.scss';

const InputFilterCategory = ({
  categories,
  isActive,
  handleClick,
  ...restProps
}) => (
  <input
    className={classnames(styles.InputFilter, styles.InputFilterCategory, {
      [styles.InputFilterActive]: isActive
    })}
    type="button"
    onClick={handleClick}
    {...restProps}
  />
);

InputFilterCategory.propTypes = {
  name: propTypes.string,
  value: propTypes.string,
  isActive: propTypes.bool,
  handleClick: propTypes.func,
  updateFilterField: propTypes.func
};

export default InputFilterCategory;
