import React from 'react';
import './PriceBlock.css';
import logRender from '../logRender/logRender';

import InputNumber from '../InputNumber/InputNumber';



class PriceBlock extends logRender {

  render() {
    const { inputMinValue, inputMaxValue, handleChangeState } = this.props
    return (
        <form className="aside-block price-block">
          <h3 className="aside-block__title">Цена</h3>
          <div className="aside-block__row">
            <label className="price-block__label">от</label>
            <InputNumber defaultValue={inputMinValue} name='minPrice' onChange={handleChangeState} />
            <label className="price-block__label">до</label>
            <InputNumber defaultValue={inputMaxValue} name='maxPrice' onChange={handleChangeState} />
          </div>
        </form>
    );
  }
}

export default PriceBlock
