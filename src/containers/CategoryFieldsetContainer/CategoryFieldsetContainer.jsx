import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import CategoryFieldset from '../../components/FilterForm/CategoryFieldset/CategoryFieldset';

import { setCategoryFilterAction } from '../../store/store';

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

CategoryFieldset.propTypes = {};

const mapStateToProps = (state) => ({
  category: state.category,
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  handleCategoryChange: (value) => dispatch(setCategoryFilterAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFieldsetContainer);
