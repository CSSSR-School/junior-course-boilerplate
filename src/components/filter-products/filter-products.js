import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProductsNumber from '../input-filter-products-number';
import InputFilterProductsDiscount from '../input-filter-products-discount';
import LogRender from '../log-render';

class FilterProducts extends LogRender {
  handleFilterProductsChange = ({currentTarget}) => {
    const { updateProductsFilter = () => {} } = this.props;

    const formData = new FormData(currentTarget);
    const formDataObject = Object.fromEntries(formData);
    Object.keys(formDataObject).forEach(key => Number(formDataObject[key]));
    const {min, max, sale: discount} = formDataObject;

    if (min <= 0 || max <= 0 || discount <= 0 || min >= max) {
      updateProductsFilter({isValid: false});
    } else {
      updateProductsFilter({isValid: true});
    }

  };

  handleFilterProductsSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const { updateProductsFilter = () => {} } = this.props;

    const formData = new FormData(target);
    const formDataObject = Object.fromEntries(formData);
    const data = Object.keys(formDataObject).reduce(
      (acc, key) => ({ ...acc, [key]: Number(formDataObject[key]) }),
      {}
    );
    updateProductsFilter(data);
  };

  render() {
    const {
      filter: { min, max, discount, isValid }
    } = this.props;

    return (
      <form
        className={classnames('productsFilter', styles.filterProducts)}
        onSubmit={this.handleFilterProductsSubmit}
        onChange={this.handleFilterProductsChange}
      >
        <section className={classnames(styles.filterProductsSection)}>
          <h3 className={classnames(styles.filterProductsHeader)}>Цена</h3>
          <div className={styles.filterProductsInner}>
            от
            <InputFilterProductsNumber name="min" value={min} />
            до
            <InputFilterProductsNumber name="max" value={max} />
          </div>
        </section>
        <InputFilterProductsDiscount
          title="Скидка"
          name="sale"
          value={discount}
          parentClassName={classnames(styles.filterProductsSection)}
        />
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
  updateProductsFilter: propTypes.func
};

export default FilterProducts;
