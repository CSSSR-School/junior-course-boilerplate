import React from 'react';
import pt from 'prop-types';
import s from './NoProduct.module.css';
import Title from '../Title/Title.jsx';
import {PlanetIcon} from '../Icons';

const NoProduct = ({title, isLinkable = true}) => {
  return (
    <div className={s.noProductBlock}>
      <Title isLinkable={isLinkable}>{title}</Title>
      <PlanetIcon/>
    </div>
  );
};

NoProduct.propTypes = {
  title: pt.string.isRequired,
  isLinkable: pt.bool
};

export default NoProduct;
