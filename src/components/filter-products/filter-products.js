import React, { Component } from 'react';
import propTypes from 'prop-types';

import './filter-products.scss';
import InputFilterProducts from '../input-filter-products';
import {logRender} from '../../utils/log-render';

class FilterProducts extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const cb = this.props.updatePriceRange || (() => {});
    cb(Object.fromEntries(formData));
  };

  render() {
    const { classModifier, priceRange } = this.props;
    const baseClassName = `filter-${classModifier}`;
    const { min, max } = priceRange;
    return (
      <form
        className={`${classModifier}__filter ${baseClassName}`}
        onSubmit={this.handleSubmit}
      >
        <h3 className={`${baseClassName}__header`}>Цена</h3>
        <div className={`${baseClassName}__inner`}>
          <span>от</span>
          <InputFilterProducts
            classModifier={baseClassName}
            name="min"
            defaultValue={min}
          />
          <span>до</span>
          <InputFilterProducts
            classModifier={baseClassName}
            name="max"
            defaultValue={max}
          />
        </div>
        <button className={`${baseClassName}__button`} type="submit">
          Применить
        </button>
      </form>
    );
  }
}

FilterProducts.propTypes = {
  classModifier: propTypes.string,
  priceRange: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number
  }),
  updatePriceRange: propTypes.func
};

logRender(FilterProducts);

export default FilterProducts;
