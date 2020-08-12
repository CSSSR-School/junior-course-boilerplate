import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import BaseComponent from '../../components/baseComponent/index';
import PriceFilter from '../../components/priceFilter/index';
import { productsSelector } from '../../store/selectors';
import { setFilter } from '../../store/actionCreators';

const filtersContainerStyle = {
  padding: '4px 16px'
}

class UserFilters extends BaseComponent {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state = {
      defaultFilters: {
        minPrice: this.props.products.reduce((accum, product) => {
          if (accum === 0 && product.price > 0) {
            return product.price;
          }

          return accum > product.price ? product.price : accum;
        }, 0),
        maxPrice: this.props.products.reduce((accum, product) =>
          accum < product.price ? product.price : accum
        , 0)
      }
    }
  }

  handleFilterChange(filterName, value) {
    this.props.setFilter(filterName, value);
  }

  render() {
    return (
      <div style={ filtersContainerStyle }>
        <PriceFilter
          minPrice = { this.state.defaultFilters.minPrice }
          maxPrice = { this.state.defaultFilters.maxPrice }
          onChangeFilter={ this.handleFilterChange }
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}

const mapStateToProps = function(state) {
  return {
    products: productsSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFilters);

