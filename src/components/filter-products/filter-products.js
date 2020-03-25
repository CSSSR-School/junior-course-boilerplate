import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProducts from '../input-filter-products';
import LogRender from '../log-render';

class FilterProducts extends LogRender {
  handleFilterChange = event => {
    const {
      target: { value, name },
      currentTarget
    } = event;
    const {
      updateProductsFilterFieldValidty,
      updateProductsFilterValidity
    } = this.props;

    // current field
    if (Number(value) <= 0) {
      updateProductsFilterFieldValidty(name, { isValid: false });
    } else {
      updateProductsFilterFieldValidty(name, { isValid: true });
    }

    // form
    const formData = new FormData(currentTarget);
    const formDataObject = Object.fromEntries(formData);
    const { min, max } = formDataObject;

    if (Number(min) >= Number(max) || Number(min) <= 0 || Number(max) <= 0) {
      updateProductsFilterValidity({ isValid: false });
    } else {
      updateProductsFilterValidity({ isValid: true });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const { updateProductsFilterFieldPrice } = this.props;

    // form
    const formData = new FormData(target);
    const formDataObject = Object.fromEntries(formData);
    const mappedData = Object.keys(formDataObject).map(key => {
      return {
        [key]: {
          price: Number(formDataObject[key])
        }
      };
    });
    updateProductsFilterFieldPrice(mappedData);
  };

  render() {
    const {
      filter: {
        fields: { min, max },
        isValid
      }
    } = this.props;
    return (
      <form
        className={classnames('products__filter', styles.filterProducts)}
        onSubmit={this.handleSubmit}
        onChange={this.handleFilterChange}
      >
        <h3 className={classnames(styles.filterProductsHeader)}>Цена</h3>
        <div className={styles.filterProductsInner}>
          <span>от</span>
          <InputFilterProducts data={min} name="min" />
          <span>до</span>
          <InputFilterProducts data={max} name="max" />
        </div>
        <button
          className={styles.filterProductsButton}
          type="submit"
          disabled={!isValid}
        >
          Применить
        </button>
      </form>
    );
  }
}

FilterProducts.propTypes = {
  filter: propTypes.shape({
    fields: propTypes.shape({
      min: propTypes.shape({
        price: propTypes.number,
        isValid: propTypes.bool
      }),
      max: propTypes.shape({
        price: propTypes.number,
        isValid: propTypes.bool
      })
    })
  }),
  updateProductsFilterFieldValidty: propTypes.func,
  updateProductsFilterFieldPrice: propTypes.func,
  updateProductsFilterValidity: propTypes.func
};

export default FilterProducts;
