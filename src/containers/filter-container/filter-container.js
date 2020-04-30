import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filter from '../../components/filter';
import { filterActions, filterSelectors } from '../../redux';

class FilterContainer extends PureComponent {
  render() {
    const { filter, updateFilterField, resetFilter } = this.props;

    return (
      <Filter
        filter={filter}
        updateFilterField={updateFilterField}
        resetFilter={resetFilter}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: {
      price: filterSelectors.getFilterPrice(state),
      discount: filterSelectors.getFilterDiscount(state),
      categories: filterSelectors.getFilterCategories(state)
    }
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(filterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
