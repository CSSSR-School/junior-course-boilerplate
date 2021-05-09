import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../../LogRender/LogRender';
import InputNumber from '../../InputNumber/InputNumber';

import './PriceFieldset.css';

class PriceFieldset extends LogRender {
  handleMinPriceChange = (minPrice) => { this.props.onMinPriceChange(minPrice); };
  handleMaxPriceChange = (maxPrice) => { this.props.onMaxPriceChange(maxPrice); };

  render() {
    const {
      handleMinPriceChange,
      handleMaxPriceChange,
    } = this;
    const { defaultMinPrice, defaultMaxPrice } = this.props;

    return (
      <>
        <fieldset className="
          filter-fieldset
          filter-fieldset--price
        ">

          <legend className="
            filter-fieldset__legend
            filter-fieldset--price__legend
          ">
            Цена
          </legend>

          <div className="filter-fieldset__groups-container">

            <div className="
              filter-fieldset__group
              filter-fieldset--price__group
            ">
              <label
                className="filter-fieldset__label"
                htmlFor="filter-fieldset__input--min"
              >
                от
              </label>
              <InputNumber
                className="filter-fieldset__input"
                id="filter-fieldset__input--min"
                placeholder={ defaultMinPrice }
                defaultValue={ defaultMinPrice }
                onChange={ handleMinPriceChange }
              />
            </div>

            <div className="
              filter-fieldset__group
              filter-fieldset--price__group
            ">
              <label
                className="filter-fieldset__label"
                htmlFor="filter-fieldset__input--max"
              >
                до
              </label>
              <InputNumber
                className="filter-fieldset__input"
                id="filter-fieldset__input--max"
                placeholder={ defaultMaxPrice }
                defaultValue={ defaultMaxPrice }
                onChange={ handleMaxPriceChange }
              />
            </div>

          </div>

        </fieldset>
      </>
    );
  }
}

PriceFieldset.propTypes = {
  onMinPriceChange: PropTypes.func.isRequired,
  onMaxPriceChange: PropTypes.func.isRequired,
  defaultMaxPrice: PropTypes.number.isRequired,
  defaultMinPrice: PropTypes.number.isRequired,
};

export default PriceFieldset;
