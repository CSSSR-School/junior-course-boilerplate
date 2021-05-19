import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../../LogRender/LogRender';
import InputNumber from '../../InputNumber/InputNumber';

import './PriceFieldset.css';

class PriceFieldset extends LogRender {
  constructor(props) {
    super(props);
    this.defaultMinPrice = props.minPrice;
    this.defaultMaxPrice = props.maxPrice;
  }

  render() {
    return (
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
              placeholder={ this.defaultMinPrice }
              onChange={ this.props.handleMinPriceChange }
              value={ this.props.minPrice }
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
              placeholder={ this.defaultMaxPrice }
              onChange={ this.props.handleMaxPriceChange }
              value={ this.props.maxPrice }
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

PriceFieldset.propTypes = {
  handleMinPriceChange: PropTypes.func.isRequired,
  handleMaxPriceChange: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
};

export default PriceFieldset;
