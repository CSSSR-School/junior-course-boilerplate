import React from 'react';
import propTypes from 'prop-types';
import './style.css';

export default function Header({ children }) {
  return <h1 className="title">{children}</h1>;
}

Header.propTypes = {
  children: propTypes.node.isRequired,
};
