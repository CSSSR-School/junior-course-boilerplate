import React from 'react';

import ProductsHeader from '../products-header';
import ProductsList from '../products-list';

import './products.css';

const Products = ({data}) => {
  return (
    <section className="products">
      <ProductsHeader />
      <ProductsList products={data}/>
    </section>
  );
};

export default Products;
