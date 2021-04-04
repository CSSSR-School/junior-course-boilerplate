import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {
  getProducts,
  getCategoriesList,
  getTotalFilteredProducts,
} from '../state/modules/product';
import {
  changeFilter,
  setFilter,
  getFilter
} from '../state/modules/filter';
import {getSearch, getCategories} from '../state/modules/router';
import ProductFilter from '../components/ProductFilter/ProductFilter.jsx';
import { PropValidator } from '../prop-validator';

class ProductFilterContainer extends PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.filter.categories !== this.props.filter.categories) {
      this.updateHistory(this.props.filter);
    }
  }

  validateFilter = (filter) => {
    const {minPrice, maxPrice, minDiscount} = filter;
    let error = [false, ''];

    if (minPrice > maxPrice) {
      error = [true, 'Минимальная цена выше максимальной'];
      return error;
    }

    if (minDiscount > 100) {
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
    const {setFilter, productsList, history} = this.props;
    setFilter(productsList);
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
  history: pt.object.isRequired,
  filter: pt.object.isRequired,
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired,
  search: pt.string.isRequired,
  totalProducts: pt.number.isRequired,
  categoriesList: pt.arrayOf(pt.string).isRequired,
  searchCategories: pt.arrayOf(pt.string).isRequired,
  changeFilter: pt.func.isRequired,
  setFilter: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  productsList: getProducts(state),
  totalProducts: getTotalFilteredProducts(state),
  categoriesList: getCategoriesList(state),
  filter: getFilter(state),
  search: getSearch(state),
  searchCategories: getCategories(state)
});

export default connect(
  mapStateToProps,
  {changeFilter, setFilter}
)(withRouter(ProductFilterContainer));
