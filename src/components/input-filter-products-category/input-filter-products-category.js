import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products-category.module.scss';
import { withInputProductsCategoryHandler } from '../hoc-helpers';
import { Context } from '../context';

class InputFilterProductsCategory extends PureComponent {
  render() {
    const { isActive, onClick: handleClick, ...rest } = this.props;
    return (
      <Context.Consumer>
        {({ updateProductsFilterField, filter: {categories} }) => (
          <input
            className={classnames(
              'filterProductsInput',
              styles.inputFilterProductsCategory,
              { [styles.inputFilterProductsCategoryActive]: isActive }
            )}
            type="button"
            onClick={event =>
              handleClick(event, 'categories', updateProductsFilterField)
            }
            data-categories={JSON.stringify(categories)}
            {...rest}
          />
        )}
      </Context.Consumer>
    );
  }
}

InputFilterProductsCategory.propTypes = {
  name: propTypes.string,
  isActive: propTypes.bool,
  onClick: propTypes.func
};

export default withInputProductsCategoryHandler(InputFilterProductsCategory);
