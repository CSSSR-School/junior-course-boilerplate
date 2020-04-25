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
  componentDidMount() {
    const { categories } = this.props;

    window.history.pushState({ ...window.history.state, categories }, 'params');
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = ({ state }) => {
    Object.keys(state).forEach(key => {
      if (key === 'categories') {
        const { categories } = state;

        this.props.updateFilterCategories({ categories });
      }
    });
  };

  makeHistoryCategoriesInactive = () => {
    const {
      categories,
      pagination: { currentPage }
    } = this.props;

    window.history.pushState(
      {
        ...window.history.state,
        categories: Object.keys(categories).reduce(
          (acc, category) => ({ ...acc, [category]: { isActive: false } }),
          {}
        )
      },
      'params',
      `?currentPage=${currentPage}`
    );
  };

  render() {
    const { filter, updateFilterField, resetFilter } = this.props;

    return (
      <Filter
        filter={filter}
        updateFilterField={updateFilterField}
        resetFilter={resetFilter}
        makeHistoryCategoriesInactive={this.makeHistoryCategoriesInactive}
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
