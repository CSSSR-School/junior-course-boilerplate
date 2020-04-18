import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-category.module.scss';
import { withInputFilterCategoryHandler } from '../hoc-helpers';

const InputFilterCategory = ({
  isActive,
  updateFilterField,
  handleClick,
  ...restProps
}) => (
  <input
    className={classnames(styles.InputFilter, styles.InputFilterCategory, {
      [styles.InputFilterActive]: isActive
    })}
    type="button"
    onClick={event => handleClick(event, 'categories')}
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

export default withInputFilterCategoryHandler(InputFilterCategory);
