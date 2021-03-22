import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {
  changeFilter,
  setFilterCategories,
  resetFilter,
  getFilter,
  getCategoriesList,
  getTotalFilteredProducts
} from '../state/modules/product';
import {pushState, getQuery} from '../state/modules/routing';
import {resetPagination} from '../state/modules/pagination';
import LogRender from '../components/LogRender/LogRender';
import ProductFilter from '../components/ProductFilter/ProductFilter.jsx';

class ProductFilterContainer extends LogRender {

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
    window.history.replaceState(null, null, this.props.query);
    this.setFromHistory();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter.categories !== this.props.filter.categories) {
      this.updateHistory(this.props.filter);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setFromHistory = () => {
    const {query, setFilterCategories} = this.props;
    const searchParams = new URLSearchParams(query);
    const categories = searchParams.getAll('cat');

    if (categories.length) {
      setFilterCategories(categories);
    }
  }

  updateHistory = ({categories}) => {
    const {query, pushState} = this.props;
    const searchParams = new URLSearchParams(query);

    searchParams.delete('cat');
    categories.forEach((category) => searchParams.append('cat', category));
    pushState(`?${searchParams.toString()}`);
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
    this.props.resetFilter();
    this.props.resetPagination();
  }

  render() {
    const {
      filter,
      categoriesList,
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
        totalProducts={totalProducts}
        onChangeFilter={changeFilter}
        onResetFilter={this.resetFilter}
      />
    );
  }
}

ProductFilterContainer.propTypes = {
  filter: pt.object.isRequired,
  totalProducts: pt.number.isRequired,
  categoriesList: pt.arrayOf(pt.string).isRequired,
  query: pt.string.isRequired,
  changeFilter: pt.func.isRequired,
  setFilterCategories: pt.func.isRequired,
  resetFilter: pt.func.isRequired,
  resetPagination: pt.func.isRequired
}

const mapStateToProps = (state) => ({
  totalProducts: getTotalFilteredProducts(state),
  categoriesList: getCategoriesList(state),
  filter: getFilter(state),
  query: getQuery(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeFilter,
      setFilterCategories,
      resetFilter,
      resetPagination,
      pushState
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFilterContainer);
