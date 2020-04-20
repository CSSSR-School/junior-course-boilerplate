import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputFilterCategory from '../../components/input-filter-category';
import { productsActions } from '../../redux';
import { productsSelectors } from '../../redux/modules/products';

class InputFilterCategoryContainer extends PureComponent {
  handleClick = event => {
    event.preventDefault();
    const { name, categories, updateFilterCategories } = this.props;
    const updatedCategories = Object.keys(categories).reduce(
      (acc, category) => {
        if (category === name) {
          return { ...acc, [name]: { isActive: !acc[name].isActive } };
        }
        return acc;
      },
      categories
    );

    updateFilterCategories({ categories: updatedCategories });
    const state = window.history.state;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('category');

    Object.keys(updatedCategories).forEach(category => {
      if (updatedCategories[category].isActive) {
        searchParams.append('category', category);
      }
    });

    window.history.pushState(
      {
        ...state,
        categories: {
          ...state.categories,
          ...updatedCategories
        }
      },
      'params',
      `?${searchParams.toString()}`
    );
  };
  render() {
    const {
      categories,
      updateFilterCategories,
      ...restProps
    } = this.props;
    return (
      <InputFilterCategory handleClick={this.handleClick} {...restProps} />
    );
  }
}

const { getProductsFilterCategories } = productsSelectors;

const mapStateToProps = state => ({
  categories: getProductsFilterCategories(state)
});

const mapDispatchToProps = dispatch => {
  const {updateFilterCategories} = bindActionCreators(productsActions, dispatch);
  return {updateFilterCategories};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFilterCategoryContainer);
