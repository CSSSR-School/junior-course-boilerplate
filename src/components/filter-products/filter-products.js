import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './filter-products.scss';
import InputFilterProducts from '../input-filter-products';
import LogRender from '../log-render';

class FilterProducts extends LogRender {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true
    };
    this.inputMinRef = React.createRef();
    this.inputMaxRef = React.createRef();
  }

  handleInput = () => {
    this.setState({ isDisabled: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { updatePriceRange } = this.props;
    updatePriceRange({
      min: Number(this.inputMinRef.current.value),
      max: Number(this.inputMaxRef.current.value)
    });
  };

  render() {
    const { priceRange } = this.props;
    const { isDisabled } = this.state;
    const { min, max } = priceRange;
    return (
      <form
        className={classnames('products__filter', 'filter-products__header')}
        onSubmit={this.handleSubmit}
        onInput={this.handleInput}
      >
        <h3 className={'filter-products__header'}>Цена</h3>
        <div className={'filter-products__inner'}>
          <span>от</span>
          <InputFilterProducts
            initialValue={min}
            ref={this.inputMinRef}
          />
          <span>до</span>
          <InputFilterProducts
            initialValue={max}
            ref={this.inputMaxRef}
          />
        </div>
        <button
          className={'filter-products__button'}
          type="submit"
          disabled={isDisabled}
        >
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

export default FilterProducts;
