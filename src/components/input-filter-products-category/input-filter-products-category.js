import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products-category.module.scss';
import { withInputProductsCategoryHandler } from '../hoc-helpers';

class InputFilterProductsCategory extends PureComponent {
  render() {
    const {
      isActive,
      updateProductsFilterField,
      onClick: handleClick,
      ...rest
    } = this.props;
    return (
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
  }
}

InputFilterProductsCategory.propTypes = {
  name: propTypes.string,
  isActive: propTypes.bool,
  onClick: propTypes.func,
  updateProductsFilterField: propTypes.func,
};

export default withInputProductsCategoryHandler(InputFilterProductsCategory);
