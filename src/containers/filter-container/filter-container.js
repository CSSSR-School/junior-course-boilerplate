import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from '../../components/filter';
import { productsActions } from '../../redux';
import { productsSelectors } from '../../redux/modules/products';

class FilterContainer extends PureComponent {
  render() {
    const {
      filter,
      updateFilterField,
      resetState
    } = this.props;
    return (
      <Filter
        filter={filter}
        updateFilterField={updateFilterField}
        resetState={resetState}
      />
    );
  }
}

const { getProductsFilter } = productsSelectors;

const mapStateToProps = state => ({
  filter: getProductsFilter(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(productsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
