import React from 'react';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {getProduct} from '../state/modules/product';
import LogRender from '../components/LogRender/LogRender';
import Product from '../components/Product/Product.jsx';
import NoProduct from '../components/NoProduct/NoProduct.jsx';

class ProductContainer extends LogRender {

  render() {
    const {product} = this.props;

    return (
      <>
        {
          product ?
            <Product product={product}/>
            :
            <NoProduct/>
        }
      </>
    );
  }
}

ProductContainer.propTypes = {
  product: pt.oneOfType([PropValidator.PRODUCT_INFO.isRequired, pt.oneOf([undefined]).isRequired]),
  prodID: pt.number.isRequired
};

const mapStateToProps = (state, {prodID}) => ({
  product: getProduct(state, prodID)
});


export default connect(mapStateToProps)(ProductContainer);
