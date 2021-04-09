import React from 'react';
import s from './Loader.module.css';
import {LoaderIcon} from '../Icons';

const Loader = () => {
  return (
    <div className={s.loaderBlock}>
      <h1 className={s.loaderTitle}>Список товаров</h1>
      <LoaderIcon/>
    </div>
  );
};

export default Loader;
