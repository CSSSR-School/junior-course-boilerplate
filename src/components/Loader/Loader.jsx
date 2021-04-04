import React from 'react';
import s from './Loader.module.css';
import Title from '../Title/Title.jsx';
import {LoaderIcon} from '../Icons';

const Loader = () => {
  return (
    <div className={s.loaderBlock}>
      <Title>Список товаров</Title>
      <LoaderIcon/>
    </div>
  );
};

export default Loader;
