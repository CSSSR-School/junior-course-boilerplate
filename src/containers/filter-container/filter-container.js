import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from '../../components/filter';
import { productsActions } from '../../redux';
import { productsSelectors } from '../../redux/modules/products';
import { paginationSelectors } from '../../redux/modules/pagination';

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
    const { filter, updateFilterField, resetFilterState } = this.props;

    return (
      <Filter
        filter={filter}
        updateFilterField={updateFilterField}
        resetFilterState={resetFilterState}
        makeHistoryCategoriesInactive={this.makeHistoryCategoriesInactive}
      />
    );
  }
}

const { getProductsFilter, getProductsFilterCategories } = productsSelectors;
const { getPagination } = paginationSelectors;

const mapStateToProps = state => ({
  filter: getProductsFilter(state),
  categories: getProductsFilterCategories(state),
  pagination: getPagination(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(productsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
