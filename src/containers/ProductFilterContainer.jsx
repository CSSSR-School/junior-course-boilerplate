import {connect} from 'react-redux';
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

const mapStateToProps = (state) => ({
  productsList: getProducts(state),
  totalFilteredProducts: getTotalFilteredProducts(state),
  categoriesList: getCategoriesList(state),
  filter: getFilter(state),
  search: getSearch(state),
  searchCategories: getCategories(state)
});

export default connect(mapStateToProps,{changeFilter, setFilter})(ProductFilter);
