import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProductsNumber from '../input-filter-products-number';
import InputFilterProductsDiscount from '../input-filter-products-discount';
import LogRender from '../log-render';

class FilterProducts extends LogRender {
  handleFilterProductsChange = event => {
    const { currentTarget } = event;
    const { updateProductsFilter = () => {} } = this.props;

    const formData = new FormData(currentTarget);
    const formDataObject = Object.fromEntries(formData);
    const data = Object.keys(formDataObject).reduce(
      (acc, key) => ({ ...acc, [key]: Number(formDataObject[key]) }),
      {}
    );
    const { min, max, discount } = data;

    if ((min > 0 && max > 0 && min < max) && (discount > 0 && discount < 100)) {
      updateProductsFilter({ min, max, discount });
    }
  };

  render() {
    const {
      filter: { min, max, discount }
    } = this.props;

    return (
      <form
        className={classnames('productsFilter', styles.filterProducts)}
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
          name="discount"
          value={discount}
          parentClassName={classnames(styles.filterProductsSection)}
        />
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
