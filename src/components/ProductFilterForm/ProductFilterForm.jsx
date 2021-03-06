import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductFilterForm.module.css';
import {toInt} from '../../helpers';
import LogRender from '../LogRender/LogRender';
import InputNumber from '../InputNumber/InputNumber.jsx';
import InputDiscount from '../InputDiscount/InputDiscount.jsx';
import Checkbox from '../Checkbox/Checkbox.jsx';

class ProductFilterForm extends LogRender {

  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      errorMsg: null
    }
  }

  validateForm = ({minPrice, maxPrice, discount}) => {
    let error = [false, null];

    if (minPrice > maxPrice) {
      error = [true, 'Минимальная цена выше максимальной'];
      return error;
    }

    if (discount > 100) {
      error = [true, 'Скидка не может быть более 100%'];
      return error;
    }

    return error;
  }

  generateFormData = ({currentTarget}) => {
    const {onChangeFilterInputs} = this.props;
    const formData = Object.fromEntries(new FormData(currentTarget));
    const formattedData = Object.keys(formData).reduce((acc, key) => ({...acc, [key]: toInt(formData[key])}), {});

    const [isInvalid, errorMsg] = this.validateForm(formattedData);

    this.setState({
      formError: isInvalid,
      errorMsg
    }, () => !isInvalid && onChangeFilterInputs(formattedData))
  }

  render() {
    const {
      minPrice,
      maxPrice,
      discount,
      categories,
      onChangeFilterCategories
    } = this.props;

    const {formError, errorMsg} = this.state;

    return (
      <form
        className={s.filterForm}
        onChange={this.generateFormData}
        autoComplete="off"
      >
        <h2 className={s.formTitle}>Фильтр</h2>
        {formError && <div className={s.formError}>{errorMsg}</div>}
        <h3 className={s.title}>Цена</h3>
        <div className={cx(s.formBlock, s.priceBlock)}>
          <div className={s.price}>
            от <InputNumber name="minPrice" value={minPrice}/>
          </div>
          <div className={s.price}>
            до <InputNumber name="maxPrice" value={maxPrice}/>
          </div>
        </div>
        <h3 className={s.title}>Скидка</h3>
        <div className={cx(s.formBlock, s.discountBlock)}>
          от <InputDiscount name="discount" value={discount}/> %
        </div>
        <h3 className={s.title}>Категории</h3>
        <div className={cx(s.formBlock, s.categoryBlock)}>
          {
            categories.map((category) => (
              <Checkbox
                key={category}
                category={category}
                onChangeFilterCategories={onChangeFilterCategories}
              />
            ))
          }
        </div>
      </form>
    )
  }
}

ProductFilterForm.propTypes = {
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  discount: pt.number.isRequired,
  categories: pt.arrayOf(pt.string).isRequired,
  onChangeFilterCategories: pt.func.isRequired
};

export default ProductFilterForm;
