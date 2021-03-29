import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {
  changeFilter,
  resetFilter,
  getFilter,
  getCategoriesList,
  getTotalFilteredProducts
} from '../state/modules/product';
import {getSearch, getCategories} from '../state/modules/router';
import LogRender from '../components/LogRender/LogRender';
import ProductFilter from '../components/ProductFilter/ProductFilter.jsx';

class ProductFilterContainer extends LogRender {

  componentDidUpdate(prevProps) {
    if (prevProps.filter.categories !== this.props.filter.categories) {
      this.updateHistory(this.props.filter);
    }
  }

  validateFilter = (filter) => {
    const {minPrice, maxPrice, discount} = filter;
    let error = [false, ''];

    if (minPrice > maxPrice) {
      error = [true, 'Минимальная цена выше максимальной'];
      return error;
    }

    if (discount > 100) {
      error = [true, 'Скидка не может быть более 100%'];
      return error;
    }

    return error;
  }

  changeFilterCategories = (category) => {
    const {search, searchCategories, history} = this.props;
    const searchParams = new URLSearchParams(search);

    searchParams.delete('cat');

    if (searchCategories.length) {
      const itemIndex = searchCategories.indexOf(category);
      const categories = itemIndex !== -1 ?
          [
            ...searchCategories.slice(0, itemIndex),
            ...searchCategories.slice(itemIndex + 1)
          ]
          :
          [...searchCategories, category];

      categories.forEach((category) => searchParams.append('cat', category));
      return history.push(`?${searchParams.toString()}`);
    }

    searchParams.set('cat', category);
    return history.push(`?${searchParams.toString()}`);
  }

  resetFilter = () => {
    const {resetFilter, history} = this.props;
    resetFilter();
    history.push('/');
  }

  render() {
    const {
      filter,
      categoriesList,
      searchCategories,
      totalProducts,
      changeFilter
    } = this.props;

    const [isInvalid, errorMsg] = this.validateFilter(filter);

    return (
      <ProductFilter
        filter={filter}
        isInvalid={isInvalid}
        errorMsg={errorMsg}
        categoriesList={categoriesList}
        searchCategories={searchCategories}
        totalProducts={totalProducts}
        onChangeFilter={changeFilter}
        onChangeFilterCategories={this.changeFilterCategories}
        onResetFilter={this.resetFilter}
      />
    );
  }
}

ProductFilterContainer.propTypes = {
  filter: pt.object.isRequired,
  search: pt.string.isRequired,
  totalProducts: pt.number.isRequired,
  categoriesList: pt.arrayOf(pt.string).isRequired,
  searchCategories: pt.arrayOf(pt.string).isRequired,
  changeFilter: pt.func.isRequired,
  resetFilter: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  totalProducts: getTotalFilteredProducts(state),
  categoriesList: getCategoriesList(state),
  filter: getFilter(state),
  search: getSearch(state),
  searchCategories: getCategories(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeFilter,
      resetFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductFilterContainer));
