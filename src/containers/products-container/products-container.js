import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { selectors } from '../../redux';
import Products from '../../components/products';

const {
  isFilteredProductsListEmpty,
  getProductsFilterActiveCategoriesList
} = selectors;

class ProductsContainer extends PureComponent {
  componentDidMount() {
    const {
      state: {
        pagination: { currentPage }
      }
    } = this.props;
    window.history.replaceState(
      { currentPage },
      'params',
      `?currentPage=${currentPage}`
    );
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      state: {
        products: {
          filter: { categories: prevCategories }
        }
      }
    } = prevProps;

    const {
      state: {
        products: {
          filter: { categories }
        }
      }
    } = this.props;

    if (prevCategories !== categories) {
      return true;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { state } = this.props;
    const {
      products: {
        filter: { categories }
      },
      pagination: { currentPage }
    } = state;

    if (isFilteredProductsListEmpty(state)) {
      window.history.replaceState({}, 'params', window.location.pathname);
    } else {
      if (snapshot !== null) {
        this.updateHistoryCategories(
          categories,
          getProductsFilterActiveCategoriesList(state)
        );
      } else {
        this.updateHistoryCurrentPage(currentPage);
      }
    }
  }

  updateHistoryCategories = (
    categories,
    filteredCategories,
    title = 'params'
  ) => {
    const [firstParam] = window.location.search.split('&');
    const reducedCategories = filteredCategories.reduce(
      (acc, key) => `${acc}&category=${key}`,
      ''
    );
    window.history.pushState(
      { ...window.history.state, categories },
      title,
      `${firstParam}${reducedCategories}`
    );
  };

  updateHistoryCurrentPage = (currentPage, title = 'params') => {
    const [, ...restParams] = window.location.search.split('&');
    let categories = '';
    if (restParams.length !== 0) {
      categories = restParams.reduce((acc, param) => `${acc}&${param}`, '');
    }
    window.history.pushState(
      { ...window.history.state, currentPage },
      title,
      `?currentPage=${currentPage}${categories}`
    );
  };

  render() {
    return <Products {...this.props} />;
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(ProductsContainer);
