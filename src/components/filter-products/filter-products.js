import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProductsNumber from '../input-filter-products-number';
import InputFilterProductsDiscount from '../input-filter-products-discount';
import InputFilterProductsCategory from '../input-filter-products-category';

class FilterProducts extends PureComponent {
  handleProductsFilterChange = event => {
    const { currentTarget } = event;
    const { updateProductsFilterByValue = () => {} } = this.props;

    const formData = new FormData(currentTarget);
    const formDataObject = Object.fromEntries(formData);
    const data = Object.keys(formDataObject).reduce(
      (acc, key) => ({
        ...acc,
        [key]: Number(formDataObject[key])
      }),
      {}
    );
    const { min, max, discount } = data;
    updateProductsFilterByValue({ min, max, discount });
  };

  render() {
    const {
      filter: { min, max, discount },
      updateProductsFilterByCategory,
    } = this.props;

    return (
      <form
        className={classnames('productsFilter', styles.filterProducts)}
        onChange={this.handleProductsFilterChange}
      >
        <section className={classnames(styles.filterProductsWrapper)}>
          <h3 className={classnames(styles.filterProductsHeader)}>Цена</h3>
          <div className={classnames(styles.filterProductsInner)}>
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
          parentClassName={classnames(styles.filterProductsWrapper)}
        />
        <section className={classnames(styles.filterProductsWrapper)}>
          <h3 className={classnames(styles.filterProductsHeader)}>Категории</h3>
          <div className={styles.filterProductsInner}>
            <InputFilterProductsCategory
              name="clothes"
              updateProductsFilterByCategory={updateProductsFilterByCategory}
            />
            <InputFilterProductsCategory
              name="books"
              updateProductsFilterByCategory={updateProductsFilterByCategory}
            />
          </div>
        </section>
      </form>
    );
  }
}

FilterProducts.propTypes = {
  filter: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number,
    discount: propTypes.number
  }),
  updateProductsFilterByValue: propTypes.func
};

export default FilterProducts;
