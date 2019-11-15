import React from 'react';
import PropTypes from 'prop-types';
import './RatingComponent.css'

const RatingComponent = ({isFilled}) => {
    return <div className={`star ${isFilled ? "is-filled" : ""}`}/>;
};

RatingComponent.propTypes = {
    isFilled: PropTypes.bool
};

export default RatingComponent;
