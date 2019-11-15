import React from 'react';
import PropTypes from 'prop-types';
import s from './RatingComponent.module.scss'

const RatingComponent = ({isFilled}) => {
    return <div className={`${s.star} ${isFilled ? s.starFilled : ""}`}/>;
};

RatingComponent.propTypes = {
    isFilled: PropTypes.bool
};

export default RatingComponent;
