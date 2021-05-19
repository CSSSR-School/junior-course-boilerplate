import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import DiscountFieldset from '../../components/FilterForm/DiscountFieldset/DiscountFieldset';

import { setDiscountFilterAction } from '../../store/store';

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

DiscountFieldsetContainer.propTypes = {};

const mapStateToProps = (state) => ({
  discount: state.discount
});

const mapDispatchToProps = (dispatch) => ({
  handleDiscountChange: (value) => dispatch(setDiscountFilterAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscountFieldsetContainer);
