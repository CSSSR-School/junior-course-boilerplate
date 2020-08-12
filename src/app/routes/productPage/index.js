import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProductList from '../../../app/containers/productList/index';
import PageTitle from '../../../app/components/pageTitle/index';
import UserFilters from '../../../app/containers/userFilters/index';
import BaseComponent from '../../components/baseComponent/index';
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


class ProductPage extends BaseComponent {
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
            <ProductList/>
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
