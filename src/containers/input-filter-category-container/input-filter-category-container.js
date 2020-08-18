import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { routerSelectors } from '../../redux';
import InputFilterCategory from '../../components/input-filter-category';

class InputFilterCategoryContainer extends PureComponent {
  updateSearchWithCategory = name => {
    const { search, searchCategories } = this.props;

    const searchParams = new URLSearchParams(search);

    searchParams.delete('category');

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
    searchParams.set('currentPage', 1);

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
  search: routerSelectors.getRouterSearch(state),
  searchCategories: routerSelectors.getRouterSearchCategories(state)
});

export default connect(mapStateToProps)(InputFilterCategoryContainer);
