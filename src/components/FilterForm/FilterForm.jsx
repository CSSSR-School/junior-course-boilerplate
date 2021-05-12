import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender';

import DiscountFieldset from './DiscountFieldset/DiscountFieldset';
import CategoryFieldset from './CategoryFieldset/CategoryFieldset';
import PriceFieldset from './PriceFieldset/PriceFieldset';

import { AppContext } from '../App/App'

import './FilterForm.css';

class ProductFieldset extends LogRender {
  constructor(props) {
    super(props);
    this.handleMinPriceChange = props.onFilterChange.bind(this, 'minPrice');
    this.handleMaxPriceChange = props.onFilterChange.bind(this, 'maxPrice');
    this.handleDiscountChange = props.onFilterChange.bind(this, 'maxPrice');
    this.handleCategoryChange = props.onFilterChange.bind(this, 'category');
    this.handleResetFilterButtonClick = props.onFilterChange.bind(this, 'reset');
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          ({ minPrice, maxPrice, discount, category, categories }) => (
            <form className="filter-form">
              <PriceFieldset
                minPrice={ minPrice }
                maxPrice={ maxPrice }
                onMinPriceChange={ this.handleMinPriceChange }
                onMaxPriceChange={ this.handleMaxPriceChange }
              />
              <DiscountFieldset
                discount={ discount }
                onChange={ this.handleDiscountChange }
              />
              <CategoryFieldset
                categories={ categories }
                category={category}
                onChange={ this.handleCategoryChange }
              />
              <button
                type="button"
                className="filter-form__reset"
                onClick={ this.handleResetFilterButtonClick }
              >
                Сбросить фильтры
              </button>
            </form>
          )
        }
      </AppContext.Consumer>
    );
  }
}

ProductFieldset.propTypes = {
  onFilterChange: PropTypes.func,
}

export default ProductFieldset;
