import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import FilterForm from '../../components/FilterForm/FilterForm';

import {
  resetFiltersAction,
} from '../../store/filters';

class FilterFormContainer extends LogRender {
  render() {
    return (
      <FilterForm
        handleResetFilterButtonClick={ this.props.handleResetFilterButtonClick }
      >
        { this.props.children }
      </FilterForm>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleResetFilterButtonClick: () => dispatch(resetFiltersAction())
});

export default connect(null, mapDispatchToProps)(FilterFormContainer);
