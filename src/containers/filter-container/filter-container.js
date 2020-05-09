import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Filter from '../../components/filter';
import {
  filterActions,
  filterSelectors,
  routerSelectors,
  productsSelectors
} from '../../redux';

class FilterContainer extends PureComponent {
  resetHistoryCurrentPage = () => {
    const { search, push } = this.props;

    const searchParams = new URLSearchParams(search);

    searchParams.set('currentPage', 1);

    push({ search: searchParams.toString() });
  };

  render() {
    const { filter, updateFilterField, resetFilter, productsList } = this.props;

    return (
      <Filter
        filter={filter}
        updateFilterField={updateFilterField}
        resetFilter={resetFilter}
        resetHistoryCurrentPage={this.resetHistoryCurrentPage}
        productsList={productsList}
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
    },
    search: routerSelectors.getRouterSearch(state),
    productsList: productsSelectors.getProductsList(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...filterActions, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
