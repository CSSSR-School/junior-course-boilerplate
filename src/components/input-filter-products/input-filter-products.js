import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './input-filter-products.module.scss';
import LogRender from '../log-render';

class InputFilterProducts extends LogRender {
  render() {
    const {
      name,
      data: { price, isValid },
    } = this.props;
    return (
      <input
        className={classnames(
          'filter-products__input',
          styles.inputFilterProducts,
          { [styles.inputFilterProductsInvalid]: !isValid }
        )}
        type="number"
        defaultValue={price}
        name={name}
      />
    );
  }
}

InputFilterProducts.propTypes = {
  data: propTypes.shape({
    price: propTypes.number,
    isValid: propTypes.bool
  }),
  name: propTypes.string,
};

export default InputFilterProducts;
