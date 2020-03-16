import React from 'react';

import ProductsHeader from '../products-header';
import ProductsList from '../products-list';

import './products.css';

const Products = ({data}) => {
  return (
    <section classList="products">
      <ProductsHeader />
      <ProductsList products={data}/>
    </section>
  );
};

export default Products;
