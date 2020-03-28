import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProducts from '../input-filter-products';
import LogRender from '../log-render';

class FilterProducts extends LogRender {
  handleFilterChange = event => {
    const {
      target: { value },
      currentTarget
    } = event;

    const { updateProductsList = () => {} } = this.props;

    // current field
    if (Number(value) <= 0) {
      updateProductsList({ isValid: false });
    }

    // form
    const formData = new FormData(currentTarget);
    const formDataObject = Object.fromEntries(formData);
    const { min, max } = formDataObject;

    if (Number(min) >= Number(max) || Number(min) <= 0 || Number(max) <= 0) {
      updateProductsList({ isValid: false });
    } else {
      updateProductsList();
    }
  };

  handleFilterSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const { updateProductsList } = this.props;

    // form
    const formData = new FormData(target);
    const formDataObject = Object.fromEntries(formData);
    const mappedData = Object.keys(formDataObject).reduce(
      (acc, key) => ({ ...acc, [key]: Number(formDataObject[key]) }),
      {}
    );
    updateProductsList(mappedData);
  };

  render() {
    const {
      filter: { min, max, isValid }
    } = this.props;

    return (
      <form
        className={classnames('products__filter', styles.filterProducts)}
        onSubmit={this.handleFilterSubmit}
        onChange={this.handleFilterChange}
      >
        <h3 className={classnames(styles.filterProductsHeader)}>Цена</h3>
        <div className={styles.filterProductsInner}>
          <span>от</span>

          <InputFilterProducts name="min" initialValue={min}/>
          <span>до</span>

          <InputFilterProducts name="max" initialValue={max}/>
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
    min: propTypes.number,
    max: propTypes.number,
    isValid: propTypes.bool
  }),
  updateProductsList: propTypes.func,
};

export default FilterProducts;
