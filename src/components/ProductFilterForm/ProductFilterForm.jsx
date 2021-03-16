import React from 'react';
import cx from 'classnames';
import s from './ProductFilterForm.module.css';
import FilterFormContext from '../../context/filterForm';
import {declOfNum} from '../../helpers';
import LogRender from '../LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber.jsx';
import InputDiscount from '../InputDiscount/InputDiscount.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

class ProductFilterForm extends LogRender {

  render() {

    const {totalProducts} = this.props;

    return (
      <FilterFormContext.Consumer>
        {({
          formFields: {
            minPrice,
            maxPrice,
            categories,
            discount
          },
          formError,
          errorMsg,
          categoriesList,
          onResetFormFields,
          onChangeFilterFields,
          onChangeFilterCategories
        }) => (
          <form className={s.filterForm} autoComplete="off">
            <div className={s.formHeader}>
              <h2 className={s.formTitle}>Фильтр</h2>
              <span>{
                declOfNum(
                  totalProducts,
                  [`Найден ${totalProducts} товар`, `Найдено ${totalProducts} товара`, `Найдено ${totalProducts} товаров`]
                )}
              </span>
            </div>
            {formError && <div className={s.formError}>{errorMsg}</div>}
            <h3 className={s.title}>Цена</h3>
            <div className={cx(s.formBlock, s.priceBlock)}>
              <div className={s.price}>
                от <InputNumber
                      name="minPrice"
                      value={minPrice}
                      onChangeFilterFields={onChangeFilterFields}
                    />
              </div>
              <div className={s.price}>
                до <InputNumber
                      name="maxPrice"
                      value={maxPrice}
                      onChangeFilterFields={onChangeFilterFields}
                    />
              </div>
            </div>

            <h3 className={s.title}>Скидка</h3>
            <div className={cx(s.formBlock, s.discountBlock)}>
              от <InputDiscount
                    name="discount"
                    value={discount}
                    onChangeFilterFields={onChangeFilterFields}
                  /> %
            </div>

            <h3 className={s.title}>Категории</h3>
            <div className={cx(s.formBlock, s.categoryBlock)}>
              {
                categoriesList.map((category) => (
                  <Checkbox
                    key={category}
                    category={category}
                    isActive={categories.includes(category)}
                    onChangeFilterCategories={onChangeFilterCategories}
                  />
                ))
              }
            </div>

            <button
              className={s.btn}
              type="button"
              onClick={onResetFormFields}
            >
              Сбросить фильтры
            </button>
          </form>
        )}
      </FilterFormContext.Consumer>
    )
  }
}

export default ProductFilterForm;
