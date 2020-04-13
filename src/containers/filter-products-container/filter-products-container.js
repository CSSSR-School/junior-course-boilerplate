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

  handlePopState = ({ state }) =>
    this.props.updateProductsFilterCategories({ state });

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  componentDidUpdate() {
    const { state } = this.props;
    const {
      products: {
        filter: { categories }
      }
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
    const {
      products: { filter }
    } = state;
    return (
      <FilterProducts
        filter={filter}
        updateProductsFilterField={updateProductsFilterField}
        setInitialState={setInitialState}
      />
    );
  }
}

const {
  setInitialState,
  updateProductsFilterField,
  updateProductsFilterCategories
} = productsActions;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setInitialState,
      updateProductsFilterField,
      updateProductsFilterCategories
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(FilterProductsContainer);
