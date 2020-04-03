import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { startCase } from 'lodash';

import { withInputProductsCategoryState } from '../hoc-helpers';

import styles from './input-filter-products-category.module.scss';

class InputFilterProductsCategory extends PureComponent {
  render() {
    const { name, isActive, onClick: handleClick } = this.props;
    return (
      <input
        className={classnames(
          'filterProductsInput',
          styles.inputFilterProductsCategory,
          { [styles.inputFilterProductsCategoryActive]: isActive }
        )}
        type="button"
        name={name}
        value={startCase(name)}
        onClick={handleClick}
      />
    );
  }
}

InputFilterProductsCategory.propTypes = {
  name: propTypes.string,
  isActive: propTypes.bool,
  onClick: propTypes.func
};

export default withInputProductsCategoryState(InputFilterProductsCategory);
