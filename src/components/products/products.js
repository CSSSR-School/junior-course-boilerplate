import React from 'react';
import propTypes from 'prop-types';

import ProductsHeader from '../products-header';
import ProductsList from '../products-list';

import './products.scss';

const Products = ({ data }) => {
  return (
    <section className="products">
      <ProductsHeader header={'Список товаров'} />
      <ProductsList products={data} />
    </section>
  );
};

Products.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isInStock: propTypes.bool,
      img: propTypes.string,
      title: propTypes.node,
      price: propTypes.node,
      subPriceContent: propTypes.node,
      maxRating: propTypes.number,
      rating: propTypes.number,
    })
  )
};

export default Products;
