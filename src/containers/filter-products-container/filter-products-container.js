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
    const { state } = this.props;
    const {productsFilter: { categories }
    } = state;
    const { getProductsFilterActiveCategoriesList } = productsSelectors;

    this.updateHistory(
      categories,
      getProductsFilterActiveCategoriesList(state)
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
    const { state, updateProductsFilterField, setInitialState } = this.props;
    const { productsFilter } = state;
    return (
      <FilterProducts
        filter={productsFilter}
        updateProductsFilterField={updateProductsFilterField}
        setInitialState={setInitialState}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(productsActions, dispatch);

export default connect(null, mapDispatchToProps)(FilterProductsContainer);
