import React from 'react';
import pt from 'prop-types';
import s from './ProductsList.module.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import ProductRatingItem from '../ProductRatingItem/ProductRatingItem.jsx';
import Title from '../Title/Title.jsx';
import {PropValidator} from '../../prop-validator';
import LogRender from '../LogRender/LogRender';

class ProductsList extends LogRender {

  renderProductsList = (products) => (
    products.map((product) => (
      <li key={product.id}>
        <ProductItem
          {...product}
          ratingComponent={ProductRatingItem}
        />
      </li>
    ))
  );

  render() {
    const {products} = this.props;
    return (
      <div className="products">
        <Title>Список товаров</Title>
        {
          products.length === 0 ?
            <p className={s.noProducts}>Список товаров пуст</p>
            :
            <ul className={s.productsList}>
              {this.renderProductsList(products)}
            </ul>
        }
      </div>
    )
  }
}

ProductsList.propTypes = {
  products: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired
};

ProductsList.defaultProps = {
  products: []
}

export default ProductsList;
