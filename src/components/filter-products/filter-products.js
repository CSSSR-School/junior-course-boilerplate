import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './filter-products.scss';
import InputFilterProducts from '../input-filter-products';
import { logRender } from '../../utils/log-render';

class FilterProducts extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const cb = this.props.updatePriceRange || (() => {});
    cb(Object.fromEntries(formData));
  };

  render() {
    const { priceRange } = this.props;
    const { min, max } = priceRange;
    return (
      <form
        className={classnames('products__filter', 'filter-products__header')}
        onSubmit={this.handleSubmit}
      >
        <h3 className={'filter-products__header'}>Цена</h3>
        <div className={'filter-products__inner'}>
          <span>от</span>
          <InputFilterProducts name="min" defaultValue={min} />
          <span>до</span>
          <InputFilterProducts name="max" defaultValue={max} />
        </div>
        <button className={'filter-products__button'} type="submit">
          Применить
        </button>
      </form>
    );
  }
}

FilterProducts.propTypes = {
  priceRange: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number
  }),
  updatePriceRange: propTypes.func
};

logRender(FilterProducts);

export default FilterProducts;
