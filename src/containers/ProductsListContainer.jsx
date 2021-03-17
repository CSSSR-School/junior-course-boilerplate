import React, {Component} from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import isEqual from 'lodash.isequal';
import {getFilteredProducts, getPage} from '../selectors/selectors';
import {PRODUCTS_LIMIT} from '../consts';
import ProductsList from '../components/ProductsList/ProductsList.jsx';

class ProductsListContainer extends Component {

  shouldComponentUpdate(nextProps) {
    if (isEqual(this.props.filteredProductsList, nextProps.filteredProductsList) && this.props.page === nextProps.page) {
      return false
    }

    return true;
  }

  render() {
    const {filteredProductsList, page} = this.props;
    const start = (page - 1) * PRODUCTS_LIMIT;
    const end = PRODUCTS_LIMIT * page;

    return (
      <ProductsList products={filteredProductsList.slice(start, end)}/>
    )
  }
}

ProductsListContainer.propTypes = {
  filteredProductsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired,
  page: pt.number.isRequired
};

const mapStateToProps = (state) => ({
  filteredProductsList: getFilteredProducts(state),
  page: getPage(state)
});


export default connect(mapStateToProps)(ProductsListContainer);
