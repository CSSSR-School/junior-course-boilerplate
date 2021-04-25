import React from 'react';


const Rating = ({ isFilled }) => {
  return (
    <span>{ isFilled ? '★' : '☆' }</span>
  );
};

export default Rating;
