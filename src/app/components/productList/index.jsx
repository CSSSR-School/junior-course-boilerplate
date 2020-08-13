import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './index.module.css';
import ProductItem from '../../components/productCard';
import BaseComponent from '../../components/baseComponent/index';


const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? 'starFill' : 'none'} />;
};

class ProductList extends BaseComponent {
  get productItems() {
    return this.props.products
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
      <ul className={ classnames(style.list) }>
        {this.productItems}
      </ul>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList;
