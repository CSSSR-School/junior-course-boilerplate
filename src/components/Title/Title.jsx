import React, {memo} from 'react';
import pt from 'prop-types';
import s from './Title.module.css';

const Title = ({children}) => {
  return (
    <h1 className={s.title}>{children}</h1>
  )
}

Title.propTypes = {
  children: pt.node.isRequired
};

export default memo(Title);
