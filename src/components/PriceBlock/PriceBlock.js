import React from 'react';
import './PriceBlock.css';
import logRender from '../logRender/logRender';

import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';


class PriceBlock extends logRender {

  render() {
    const { inputMinValue, inputMaxValue, handleChangeState, discountValue } = this.props
    return (
        <form className="price-block">
          <span className="price-block__title">Цена</span>
          <div className="price-block__row">
            <label className="price-block__label">от</label>
            <InputNumber defaultValue={inputMinValue} name='minPrice' onChange={handleChangeState} />
            <label className="price-block__label">до</label>
            <InputNumber defaultValue={inputMaxValue} name='maxPrice' onChange={handleChangeState} />
          </div>
          <InputDiscount title='Скидка' name='discount' value={discountValue} onChange={handleChangeState}  />
        </form>
    );
  }
}

export default PriceBlock
