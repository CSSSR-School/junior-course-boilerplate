import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputFilterCategory from '../../components/input-filter-category';
import { filterActions } from '../../redux';

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
  };

  render() {
    const { categories, updateFilterCategories, ...restProps } = this.props;

    return (
      <InputFilterCategory handleClick={this.handleClick} {...restProps} />
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { updateFilterCategories } = bindActionCreators(
    filterActions,
    dispatch
  );

  return { updateFilterCategories };
};

export default connect(null, mapDispatchToProps)(InputFilterCategoryContainer);
