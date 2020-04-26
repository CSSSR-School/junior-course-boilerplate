import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from '../../components/filter';
import {
  filterActions,
  filterSelectors,
  paginationSelectors
} from '../../redux';

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

const { getFilter, getFilterCategories } = filterSelectors;
const { getPagination } = paginationSelectors;

const mapStateToProps = state => ({
  filter: getFilter(state),
  categories: getFilterCategories(state),
  pagination: getPagination(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(filterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
