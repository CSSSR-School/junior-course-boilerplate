import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {
  changeFilter,
  setFilterCategories,
  resetFilter
} from '../reducers/rootReducer';
import LogRender from '../components/LogRender/LogRender';
import ProductFilter from '../components/ProductFilter/ProductFilter.jsx';
import {getFilter, getCategories, getFilteredProducts} from '../selectors/selectors';

class ProductFilterContainer extends LogRender {

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
    this.setFromHistory();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter.categories !== this.props.filter.categories){
      this.updateHistory(this.props.filter);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setInitialURL = () => window.history.replaceState(null, null, window.location.pathname);

  setFromHistory = () => {
    const params = window.location.search.slice(1);
    const categories = params === '' ? [] : params.split('&');

    if (categories.length > 0) {
      this.props.setFilterCategories(categories);
    }
  }

  updateHistory = ({categories}) => {
    const params = categories.length > 0 ? `?${categories.join('&')}` : window.location.pathname;
    window.history.pushState(null, null, params);
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

  resetFilter = () => {
    this.setInitialURL();
    this.props.resetFilter();
  }

  render() {
    const {
      filter,
      categoriesList,
      filteredProductsList,
      changeFilter
    } = this.props;
    const [isInvalid, errorMsg] = this.validateFilter(filter);

    return (
      <ProductFilter
        filter={filter}
        isInvalid={isInvalid}
        errorMsg={errorMsg}
        categoriesList={categoriesList}
        totalProducts={filteredProductsList.length}
        onChangeFilter={changeFilter}
        onResetFilter={this.resetFilter}
      />
    );
  }
}

ProductFilterContainer.propTypes = {
  filter: pt.object.isRequired,
  filteredProductsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired,
  categoriesList: pt.arrayOf(pt.string).isRequired,
  changeFilter: pt.func.isRequired,
  setFilterCategories: pt.func.isRequired,
  resetFilter: pt.func.isRequired
}

const mapStateToProps = (state) => ({
  filteredProductsList: getFilteredProducts(state),
  categoriesList: getCategories(state),
  filter: getFilter(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeFilter,
      setFilterCategories,
      resetFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFilterContainer);
