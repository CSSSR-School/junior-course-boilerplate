import React from 'react';
import propTypes from 'prop-types';

const Header = ({ header, className }) => (
  <h2 className={className}>{header}</h2>
);

Header.propTypes = {
  value: propTypes.string
};

export default Header;
