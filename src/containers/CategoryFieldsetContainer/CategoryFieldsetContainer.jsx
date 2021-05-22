import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import CategoryFieldset from '../../components/FilterForm/CategoryFieldset/CategoryFieldset';

import { categoriesSelector } from '../../store/domain';
import {
  setCategoryFilterAction,
  categorySelector,
} from '../../store/filters';


class CategoryFieldsetContainer extends LogRender {
  render() {
    return (
      <CategoryFieldset
        handleCategoryChange={ this.props.handleCategoryChange }
        category={ this.props.category }
        categories={ this.props.categories }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  category: categorySelector(state),
  categories: categoriesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCategoryChange: (value) => dispatch(setCategoryFilterAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFieldsetContainer);
