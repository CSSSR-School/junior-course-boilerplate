import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { filterActions, filterSelectors } from '../../redux';
import InputFilterCategory from '../../components/input-filter-category';

class InputFilterCategoryContainer extends PureComponent {
  handleClick = event => {
    event.preventDefault();

    const {
      name,
      categories,
      pathname,
      search,
      push,
      updateFilterCategories
    } = this.props;

    const updatedCategories = Object.keys(categories).reduce(
      (acc, category) => {
        if (category === name) {
          return { ...acc, [name]: { isActive: !acc[name].isActive } };
        }

        return acc;
      },
      categories
    );

    const searchParams = new URLSearchParams(search);

    searchParams.delete('category');

    Object.keys(updatedCategories).forEach(category => {
      if (updatedCategories[category].isActive) {
        searchParams.append('category', category);
      }
    });

    updateFilterCategories({ categories: updatedCategories });
    push(`${pathname}?${searchParams.toString()}`);
  };

  render() {
    const {
      categories,
      updateFilterCategories,
      updateFilterField,
      resetFilter,
      push,
      ...restProps
    } = this.props;

    return (
      <InputFilterCategory handleClick={this.handleClick} {...restProps} />
    );
  }
}

const mapStateToProps = state => ({
  categories: filterSelectors.getFilterCategories(state),
  pathname: state.router.location.pathname,
  search: state.router.location.search
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ ...filterActions, push }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFilterCategoryContainer);
