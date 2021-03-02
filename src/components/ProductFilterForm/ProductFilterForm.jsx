import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './ProductFilterForm.module.css';
import LogRender from '../LogRender/LogRender';

class ProductFilterForm extends LogRender{

  constructor(props) {
    super(props);
    this.minInput = React.createRef();
    this.maxPrice = React.createRef();
  }

  changePriceRangeHandler = (e) => {
    this.props.onChangePriceRange(e.target);
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    const {minPrice, maxPrice, isDisabled} = this.props;
    return (
      <form className={s.filterForm} onSubmit={this.formSubmitHandler}>
        <h2 className={s.formTitle}>Цена</h2>
        <div className={cx(s.formBlock, s.priceBlock)}>
          <div className={s.price}>
            <label htmlFor="min-price">от</label>
            <input
              type="number"
              id="min-price"
              name="minPrice"
              defaultValue={minPrice}
              ref={this.minInput}
              onChange={this.changePriceRangeHandler}
            />
          </div>
          <div className={s.price}>
            <label htmlFor="max-price">до</label>
            <input
              type="number"
              id="max-price"
              name="maxPrice"
              defaultValue={maxPrice}
              ref={this.maxPrice}
              onChange={this.changePriceRangeHandler}
            />
          </div>
        </div>
        <button
          className={cx(s.btn, { [s.btnDisabled]: isDisabled })}
          type="submit"
          disabled={isDisabled}
        >
          Применить
        </button>
      </form>
    )
  }
}

ProductFilterForm.propTypes = {
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  isDisabled: pt.bool.isRequired,
  onFormSubmit: pt.func.isRequired,
  onChangePriceRange: pt.func.isRequired
};

export default ProductFilterForm;
