import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductFilter.module.css';
import {declOfNum} from '../../helpers';
import FormInput from '../FormInput/FormInput.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

const ProductFilter = ({
  filter: {minPrice, maxPrice, categories, discount},
  isInvalid,
  errorMsg,
  totalProducts,
  categoriesList,
  onChangeFilter,
  onResetFilter
}) => {
  return (
    <form className={s.filterForm} autoComplete="off">
      <div className={s.formHeader}>
        <h2 className={s.formTitle}>Фильтр</h2>
        <span>
          {
            declOfNum(
              totalProducts,
              [
              `Найден ${totalProducts} товар`,
              `Найдено ${totalProducts} товара`,
              `Найдено ${totalProducts} товаров`
              ]
            )
          }
        </span>
      </div>
      {isInvalid && <div className={s.formError}>{errorMsg}</div>}
      <h3 className={s.title}>Цена</h3>
      <div className={cx(s.formBlock, s.priceBlock)}>
        <div className={s.price}>
          от
          <FormInput
            name="minPrice"
            value={minPrice}
            onChangeFilter={onChangeFilter}
          />
        </div>
        <div className={s.price}>
          до
          <FormInput
            name="maxPrice"
            value={maxPrice}
            onChangeFilter={onChangeFilter}
          />
        </div>
      </div>

      <h3 className={s.title}>Скидка</h3>
      <div className={cx(s.formBlock, s.discountBlock)}>
        от
        <FormInput
          name="discount"
          value={discount}
          onChangeFilter={onChangeFilter}
        />
        %
      </div>

      <h3 className={s.title}>Категории</h3>
      <div className={cx(s.formBlock, s.categoryBlock)}>
        {categoriesList.map((category) => (
          <Checkbox
            key={category}
            category={category}
            isActive={categories.includes(category)}
            onChangeFilter={onChangeFilter}
          />
        ))}
      </div>

      <button className={s.btn} type="button" onClick={onResetFilter}>
        Сбросить фильтры
      </button>
    </form>
  );
};

ProductFilter.propTypes = {
  filter: pt.object.isRequired,
  isInvalid: pt.bool.isRequired,
  errorMsg: pt.string.isRequired,
  totalProducts: pt.number.isRequired,
  categoriesList: pt.arrayOf(pt.string).isRequired,
  onChangeFilter: pt.func.isRequired,
  onResetFilter: pt.func.isRequired
}

export default memo(ProductFilter);
