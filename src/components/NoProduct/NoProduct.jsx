import React from 'react';
import ProductTitle from '../ProductTitle/ProductTitle.jsx';
import {PlanetIcon} from '../Icons';

const NoProduct = () => {
  return (
    <>
      <ProductTitle>Товар не найден</ProductTitle>
      <PlanetIcon width={512} height={512}/>
    </>
  );
};

export default NoProduct;
