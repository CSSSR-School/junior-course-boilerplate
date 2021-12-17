import React from 'react';
import './RatingComponent.css';

const RatingComponent = ({isFilled}) => {
  return (
    <div className={`star ${isFilled ? 'is-filled' : ''}`} />
  )
}

export default RatingComponent
