import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProductsNumberPrice from '../input-filter-products-number-price';
import InputFilterProductsNumberDiscount from '../input-filter-products-number-discount';
import InputFilterProductsCategory from '../input-filter-products-category';

import { Context } from '../context';

class FilterProducts extends PureComponent {
  render() {
    const {
      filter: {
        price: { min, max },
        discount: { total: totalDiscount },
        categories
      }
    } = this.props;

    const mappedCategories = Object.keys(categories).map((category, index) => (
      <InputFilterProductsCategory
        key={index}
        name={category}
        value={`${category[0].toUpperCase()}${category.slice(1)}`}
        isActive={categories[category].isActive}
      />
    ));

    return (
      <form className={classnames('productsFilter', styles.filterProducts)}>
        <section className={classnames(styles.filterProductsWrapper)}>
          <h3 className={classnames(styles.filterProductsHeader)}>Цена</h3>
          <div className={classnames(styles.filterProductsInner)}>
            от
            <InputFilterProductsNumberPrice
              name="min"
              value={min.value}
              isValid={min.isValid}
            />
            до
            <InputFilterProductsNumberPrice
              name="max"
              value={max.value}
              isValid={max.isValid}
            />
          </div>
        </section>
        <InputFilterProductsNumberDiscount
          title="Скидка"
          name="total"
          value={totalDiscount.value}
          isValid={totalDiscount.isValid}
          parentClassName={classnames(styles.filterProductsWrapper)}
        />
        <section className={classnames(styles.filterProductsWrapper)}>
          <h3 className={classnames(styles.filterProductsHeader)}>Категории</h3>
          <div className={styles.filterProductsInner}>{mappedCategories}</div>
        </section>
        <Context.Consumer>
          {({ resetProductsFilter }) => (
            <input
              type="button"
              value="Сбросить фильтры"
              readOnly={true}
              className={classnames(styles.filterProductsReset)}
              onClick={resetProductsFilter}
            />
          )}
        </Context.Consumer>
      </form>
    );
  }
}

FilterProducts.propTypes = {
  filter: propTypes.shape({
    price: propTypes.shape({
      min: propTypes.shape({
        value: propTypes.number,
        isValid: propTypes.bool
      }),
      max: propTypes.shape({
        value: propTypes.number,
        isValid: propTypes.bool
      })
    }),
    discount: propTypes.shape({
      total: propTypes.shape({
        value: propTypes.number,
        isValid: propTypes.bool
      })
    }),
    categories: propTypes.shape({
      isActive: propTypes.bool
    })
  }),
};

export default FilterProducts;
