import React from 'react';
import pt from 'prop-types';
import s from './ProductTitle.module.css';
import {Link} from 'react-router-dom';
import {ArrowIcon} from '../Icons';

const ProductTitle = ({children}) => {

  return (
    <div className={s.title}>
      <Link to='/'>
        <ArrowIcon/>
      </Link>
      <h2>{children}</h2>
    </div>
  );
};

ProductTitle.propTypes = {
  children: pt.node.isRequired
};

export default ProductTitle;
