import React, {PureComponent} from 'react';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {connect} from 'react-redux';
import {getProducts} from '../state/modules/product';
import ProductFilterContainer from '../containers/ProductFilterContainer.jsx';
import ProductsListContainer from '../containers/ProductsListContainer.jsx';
import PaginationContainer from '../containers/PaginationContainer.jsx';
import NoProduct from '../components/NoProduct/NoProduct.jsx';

class Home extends PureComponent {

  render() {
    const {productsList} = this.props;

    if (!productsList.length) {
      return (
        <NoProduct
          title='Товары не найдены'
          isLinkable={false}
        />
      );
    }

    return (
      <div className='dashboard'>
        <ProductFilterContainer/>
        <ProductsListContainer/>
        <PaginationContainer/>
      </div>
    );
  }
}

Home.propTypes = {
  productsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

const mapStateToProps = (state) => ({
  productsList: getProducts(state)
});

export default connect(mapStateToProps)(Home);
