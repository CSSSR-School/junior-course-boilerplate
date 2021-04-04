import React from 'react';
import pt from 'prop-types';
import s from './NoProduct.module.css';
import ProductTitle from '../ProductTitle/ProductTitle.jsx';
import {PlanetIcon} from '../Icons';

const NoProduct = ({title, isLinkable = true}) => {
  return (
    <div className={s.noProductBlock}>
      <ProductTitle isLinkable={isLinkable}>{title}</ProductTitle>
      <PlanetIcon/>
    </div>
  );
};

NoProduct.propTypes = {
  title: pt.string.isRequired,
  isLinkable: pt.bool
};

export default NoProduct;
