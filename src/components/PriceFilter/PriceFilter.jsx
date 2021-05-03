import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { logRender } from '../../hocs/logRender';

import './PriceFilter.css';

const PriceFilter = ({
  onSubmit,
  defaultMinPrice,
  defaultMaxPrice
}) => {
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      minPrice: minPriceRef.current.value,
      maxPrice: maxPriceRef.current.value,
    })
  };

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
            placeholder={defaultMinPrice}
            defaultValue={defaultMinPrice}
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
            placeholder={defaultMaxPrice}
            defaultValue={defaultMaxPrice}
            ref={maxPriceRef}
          />
        </div>
      </fieldset>

      <button type="submit" className="price-filter__submit">
        Применить
      </button>

    </form>
  );
};


const PriceFilterWithLog = logRender(PriceFilter);

PriceFilterWithLog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultMaxPrice: PropTypes.number.isRequired,
  defaultMinPrice: PropTypes.number.isRequired,
};

export default PriceFilterWithLog;
