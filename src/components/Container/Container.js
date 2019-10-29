import React from 'react';
import './style.css';

export const Container = props => {
  const { children } = props;
  return <div className="container">{children}</div>;
};
