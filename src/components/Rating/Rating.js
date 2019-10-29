import React from 'react';
import propTypes from 'prop-types';
import './style.css';

export const Rating = props => {
  const { isFilled } = props;
  return <div className={isFilled ? 'star star-fill' : 'star star-clean'} />;
};

Rating.propTypes = {
  isFilled: propTypes.bool.isRequired,
};

Rating.defaultProps = {
  title: false,
};
