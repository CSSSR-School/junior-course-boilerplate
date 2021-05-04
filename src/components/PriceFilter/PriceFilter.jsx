import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender';

import './PriceFilter.css';

class PriceFilter extends LogRender {
  constructor(props) {
    super(props);
    this.minPriceRef = React.createRef();
    this.maxPriceRef = React.createRef();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit({
      minPrice: parseInt(this.minPriceRef.current.value),
      maxPrice: parseInt(this.maxPriceRef.current.value),
    })
  };

  render() {
    const { handleSubmit, minPriceRef, maxPriceRef } = this;
    const { defaultMaxPrice, defaultMinPrice } = this.props;

    return (
    <form className="price-filter" onSubmit={handleSubmit}>

      <h2 className="price-filter__title">Цена</h2>

      <fieldset className="price-filter__fieldset">
        <div className="price-filter__group">
          <label className="price-filter__label" htmlFor="price-filter__input--min">
            от
          </label>
          <input
            className="price-filter__input"
            id="price-filter__input--min"
            type="number"
            placeholder={ defaultMinPrice }
            defaultValue={ defaultMinPrice }
            ref={ minPriceRef }
          />
        </div>

        <div className="price-filter__group">
          <label className="price-filter__label" htmlFor="price-filter__input--max">
            до
          </label>
          <input
            className="price-filter__input"
            id="price-filter__input--max"
            type="number"
            placeholder={ defaultMaxPrice }
            defaultValue={ defaultMaxPrice }
            ref={ maxPriceRef }
          />
        </div>
      </fieldset>

      <button type="submit" className="price-filter__submit">
        Применить
      </button>

    </form>
  );
  }
}

PriceFilter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultMaxPrice: PropTypes.number.isRequired,
  defaultMinPrice: PropTypes.number.isRequired,
};


export default PriceFilter;
