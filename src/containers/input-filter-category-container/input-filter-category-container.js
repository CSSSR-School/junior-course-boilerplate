import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { routerSelectors } from '../../redux';
import InputFilterCategory from '../../components/input-filter-category';

class InputFilterCategoryContainer extends PureComponent {
  updateSearchWithCategory = name => {
    const { searchParams, searchCategories } = this.props;

    searchParams.delete('category');
    searchParams.delete('currentPage');

    if (searchCategories.length !== 0) {
      let categories = [];

      if (searchCategories.includes(name)) {
        categories = searchCategories.filter(category => category !== name);
      } else {
        categories = [...searchCategories, name];
      }

      categories.forEach(category =>
        searchParams.has('category')
          ? searchParams.append('category', category)
          : searchParams.set('category', category)
      );

      return { search: searchParams.toString() };
    }

    searchParams.set('category', name);

    return { search: searchParams.toString() };
  };

  render() {
    const { searchCategories, name, value } = this.props;

    return (
      <InputFilterCategory
        name={name}
        value={value}
        updateSearchWithCategory={this.updateSearchWithCategory}
        isActive={searchCategories.includes(name)}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchParams: routerSelectors.getRouterSearchParams(state),
  searchCategories: routerSelectors.getRouterSearchCategories(state)
});

export default connect(mapStateToProps)(InputFilterCategoryContainer);
