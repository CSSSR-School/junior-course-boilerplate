import React from 'react';
import pt from 'prop-types';
import s from './ErrorBlock.module.css';

const ErrorBlock = ({children}) => {
  return (
    <div className={s.error}>
      {children}
    </div>
  );
};

ErrorBlock.propTypes = {
  children: pt.node.isRequired
};

export default ErrorBlock;
