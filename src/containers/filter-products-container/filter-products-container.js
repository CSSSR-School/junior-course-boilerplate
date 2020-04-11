import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FilterProducts from '../../components/filter-products';
import {
  productsActions,
  productsSelectors
} from '../../redux/modules/products';

class FilterProductsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.setHistoryInitialURL();
  }
  componentDidMount() {
    window.addEventListener('popstate', ({ state }) =>
      this.props.updateProductsFilterCategories({ state })
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      'popstate',
      this.props.updateProductsFilterCategories
    );
  }

  componentDidUpdate() {
    const { filter, filterProductsFilterField } = this.props;
    const { categories } = filter;

    this.updateHistory(
      categories,
      filterProductsFilterField(filter, 'categories', 'isActive'),
      'categories'
    );
  }

  setHistoryInitialURL = () =>
    window.history.replaceState({}, 'categories', window.location.pathname);

  updateHistory = (data, filteredData, title) => {
    const reducedData = filteredData.reduce(
      (acc, key, index) => `${acc}${index === 0 ? '' : '&'}category=${key}`,
      ''
    );
    window.history.pushState(data, title, `?${reducedData}`);
  };

  render() {
    const { filter } = this.props;
    return (
      <FilterProducts
        filter={filter}
        updateProductsFilterField={this.props.updateProductsFilterField}
        setInitialState={this.props.setInitialState}
      />
    );
  }
}

const mapStateToProps = state => {
  const { getProductsFilter } = productsSelectors;
  return { filter: getProductsFilter(state) };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(productsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterProductsContainer);
