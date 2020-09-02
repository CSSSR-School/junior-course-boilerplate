import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Products from '../../containers/products/index';
import PageTitle from '../../../app/components/pageTitle/index';
import UserFilters from '../../../app/containers/userFilters/index';
import ProductsPagination from '../../containers/productsPagination/index';
import { getProducts } from '../../store/actionCreators';

const rightBlockStyle = {
  width: '25%'
};

const centerBlockStyle = {
  width: '50%'
}

const leftBlockStyle = {
  width: '25%'
}

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'row'
}

const pageStyle = {
  padding: '0 16px'
}


class ProductPage extends PureComponent {
  constructor(props) {
    super(props)
    this.props.getProducts();
  }

  render() {
    return (
      <div style={ pageStyle }>
        <PageTitle name="Список товаров" />

        <div style={ wrapperStyle }>
          <div style={ rightBlockStyle }>
              <UserFilters />
          </div>

          <div style={ centerBlockStyle }>
            <Products/>
            <ProductsPagination />
          </div>

          <div style={ leftBlockStyle }></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: bindActionCreators(getProducts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ProductPage);
