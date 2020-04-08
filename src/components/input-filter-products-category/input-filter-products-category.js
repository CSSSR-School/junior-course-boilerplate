import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products-category.module.scss';
import { withInputProductsCategoryHandler } from '../hoc-helpers';

const InputFilterProductsCategory = ({
  isActive,
  updateProductsFilterField,
  onClick: handleClick,
  ...rest
}) => (
  <input
    className={classnames(
      'filterProductsInput',
      styles.inputFilterProductsCategory,
      { [styles.inputFilterProductsCategoryActive]: isActive }
    )}
    type="button"
    onClick={event => handleClick(event, 'categories')}
    {...rest}
  />
);

InputFilterProductsCategory.propTypes = {
  name: propTypes.string,
  isActive: propTypes.bool,
  onClick: propTypes.func,
  updateProductsFilterField: propTypes.func
};

export default withInputProductsCategoryHandler(InputFilterProductsCategory);
