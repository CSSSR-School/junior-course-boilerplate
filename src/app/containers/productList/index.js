import React from 'react';
import { connect } from 'react-redux'

import ProductItem from '../../components/productCard';
import BaseComponent from '../../components/baseComponent/index';
import { filteredProductsSelector } from '../../store/selectors';

const MAX_VISIBLE_PRODUCTS = 3;

const listStyle = {
  padding: 0,
  listStyle: 'none',
  columns: 3
}

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : 'none'} />;
};

class ProductList extends BaseComponent {
  get productItems() {
    return this.props.products
      .slice(0, MAX_VISIBLE_PRODUCTS)
      .map((product) =>
        <li key={product.id}>
          <ProductItem
            key={product.id}
            isInStock={product.isInStock}
            img={product.img}
            title={product.title}
            price={product.price}
            subPriceContent={product.subPriceContent}
            maxRating={product.maxRating}
            rating={product.rating}
            ratingComponent={ratingComponent}
          />
        </li>
      );
  }

  render() {
    return (
      <ul style={ listStyle }>
        {this.productItems}
      </ul>
    )
  }
};

const mapStateToProps = function(state) {
  return {
    products: filteredProductsSelector(state)
  }
}

export default connect(mapStateToProps)(ProductList);
