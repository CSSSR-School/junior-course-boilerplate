import React from 'react';
import pt from 'prop-types';
import s from './Title.module.css';

const Title = ({text}) => {
  return (
    <h1 className={s.title}>{text}</h1>
  )
}

Title.propTypes = {
  text: pt.string.isRequired
};

export default Title;
