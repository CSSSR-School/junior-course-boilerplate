import React from 'react';
import pt from 'prop-types';
import s from './Error.module.css';
import {ErrorIcon} from '../Icons';

const Error = ({error}) => {
  return (
    <div className={s.errorBlock}>
      <h1 className={s.errorTitle}>{error}</h1>
      <ErrorIcon/>
    </div>
  );
};

Error.propTypes = {
  error: pt.string.isRequired
};

export default Error;
