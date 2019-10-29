import React from 'react';
import propTypes from 'prop-types';
import './style.css';

export const Header = props => {
  const { title } = props;
  return <h1 className="title">{title}</h1>;
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Какой-то список',
};
