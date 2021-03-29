import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductFilter.module.css';
import {declOfNum} from '../../helpers';
import FormBlock from '../FormBlock/FormBlock.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

const ProductFilter = ({
  filter: {minPrice, maxPrice, discount},
  isInvalid,
  errorMsg,
  totalProducts,
  categoriesList,
  searchCategories,
  onChangeFilter,
  onChangeFilterCategories,
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
      <FormBlock title='Цена'>
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
      </FormBlock>

      <FormBlock title='Скидка'>
        от
        <FormInput
          name="discount"
          value={discount}
          onChangeFilter={onChangeFilter}
        />
        %
      </FormBlock>

      <FormBlock title='Категории'>
        {categoriesList.map((category) => (
          <Checkbox
            key={category}
            category={category}
            isActive={searchCategories.includes(category)}
            onChangeFilterCategories={onChangeFilterCategories}
          >
            {category}
          </Checkbox>
        ))}
      </FormBlock>

      <button
        className={s.reset}
        type="reset"
        onClick={onResetFilter}
      >
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
  searchCategories: pt.arrayOf(pt.string).isRequired,
  onChangeFilter: pt.func.isRequired,
  onResetFilter: pt.func.isRequired,
  onChangeFilterCategories: pt.func.isRequired
};

export default memo(ProductFilter);
