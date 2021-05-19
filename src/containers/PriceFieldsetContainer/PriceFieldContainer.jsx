import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import PriceFieldset from '../../components/FilterForm/PriceFieldset/PriceFieldset';

import {
  setMinPriceFilterAction,
  setMaxPriceFilterAction
} from '../../store/store';

class PriceFieldContainer extends LogRender {
  render() {
    return (
      <PriceFieldset
        handleMinPriceChange={ this.props.handleMinPriceChange }
        handleMaxPriceChange={this.props.handleMaxPriceChange}
        minPrice={ this.props.minPrice }
        maxPrice={ this.props.maxPrice }
      />
    )
  }
}

PriceFieldContainer.propTypes = {};

const mapStateToProps = (state) => ({
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
});

const mapDispatchToProps = (dispatch) => ({
  handleMinPriceChange: (value) => dispatch(setMinPriceFilterAction(value)),
  handleMaxPriceChange: (value) => dispatch(setMaxPriceFilterAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceFieldContainer);
