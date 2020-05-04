import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './filter.module.scss';
import InputFilterPrice from '../input-filter-price';
import InputFilterDiscount from '../input-filter-discount';
import InputFilterCategoryContainer from '../../containers/input-filter-category-container';

const Filter = props => {
  const {
    filter: {
      price: { min, max },
      discount: { total: totalDiscount },
      categories
    },
    updateFilterField,
    resetFilter
  } = props;

  const mappedCategories = Object.keys(categories).map((category, index) => (
    <InputFilterCategoryContainer
      key={index}
      name={category}
      value={category}
    />
  ));

  return (
    <form className={classnames(styles.Filter)}>
      <section className={classnames(styles.FilterWrapper)}>
        <h3 className={classnames(styles.FilterHeader)}>Цена</h3>
        <div className={classnames(styles.FilterInner)}>
          от
          <InputFilterPrice
            name="min"
            value={min.value}
            isValid={min.isValid}
            updateFilterField={updateFilterField}
          />
          до
          <InputFilterPrice
            name="max"
            value={max.value}
            isValid={max.isValid}
            updateFilterField={updateFilterField}
          />
        </div>
      </section>

      <InputFilterDiscount
        title="Скидка"
        name="total"
        value={totalDiscount.value}
        isValid={totalDiscount.isValid}
        updateFilterField={updateFilterField}
        parentClassName={classnames(styles.FilterWrapper)}
      />

      <section className={classnames(styles.FilterWrapper)}>
        <h3 className={classnames(styles.FilterHeader)}>Категории</h3>
        <div className={styles.FilterInner}>{mappedCategories}</div>
      </section>

      <Link
        to={{
          search: 'currentPage=1'
        }}
        className={classnames(styles.FilterReset)}
        onClick={resetFilter}
      >
        Сбросить фильтры
      </Link>
    </form>
  );
};

Filter.propTypes = {
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
      books: propTypes.shape({ isActive: propTypes.bool }),
      clothes: propTypes.shape({ isActive: propTypes.bool })
    })
  }),
  updateFilterField: propTypes.func,
  resetFilter: propTypes.func
};

export default Filter;
