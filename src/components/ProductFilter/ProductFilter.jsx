import React, {memo} from 'react';
import pt from 'prop-types';
import s from './ProductFilter.module.css';
import {declOfNum} from '../../helpers';
import FormBlock from '../FormBlock/FormBlock.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';
import ErrorBlock from '../ErrorBlock/ErrorBlock.jsx';
import Button from '../Button/Button.jsx';

const ProductFilter = ({
  filter: {minPrice, maxPrice, minDiscount},
  isInvalid,
  errorMsg,
  totalProducts,
  categoriesList,
  searchCategories,
  onChangeFilter,
  onChangeFilterCategories,
  onResetFilter
}) => {

  const renderButtons = () => (
    categoriesList.map((category) => (
      <Checkbox
        key={category}
        category={category}
        isActive={searchCategories.includes(category)}
        onChangeFilterCategories={onChangeFilterCategories}
      >
        {category}
      </Checkbox>
    ))
  );

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
      {isInvalid && <ErrorBlock>{errorMsg}</ErrorBlock>}
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
          name="minDiscount"
          value={minDiscount}
          onChangeFilter={onChangeFilter}
        />
        %
      </FormBlock>

      <FormBlock
        title='Категории'
        additionalClass='categoryBlock'
      >
        {renderButtons()}
      </FormBlock>

      <Button
        type="reset"
        onClick={onResetFilter}
      >
        Сбросить фильтры
      </Button>
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
