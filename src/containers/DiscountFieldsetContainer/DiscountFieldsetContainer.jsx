import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import DiscountFieldset from '../../components/FilterForm/DiscountFieldset/DiscountFieldset';

import {
  setDiscountFilterAction,
  discountSelector,
} from '../../store/filters';

class DiscountFieldsetContainer extends LogRender {
  render() {
    return (
      <DiscountFieldset
        handleDiscountChange={ this.props.handleDiscountChange }
        discount={ this.props.discount }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  discount: discountSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleDiscountChange: (value) => dispatch(setDiscountFilterAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscountFieldsetContainer);
