import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FilterProducts from '../../components/filter-products';
import { productsActions } from '../../redux';

class FilterProductsContainer extends PureComponent {
  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = ({ state }) => {

    if (state.hasOwnProperty('categories')) {
      const {categories} = state;
      this.props.updateProductsFilterCategories({ categories });
    }
  }
  render() {
    const {
      state: {
        products: { filter }
      },
      updateProductsFilterField,
      setInitialState
    } = this.props;
    return (
      <FilterProducts
        filter={filter}
        updateProductsFilterField={updateProductsFilterField}
        setInitialState={setInitialState}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(productsActions, dispatch);

export default connect(null, mapDispatchToProps)(FilterProductsContainer);
