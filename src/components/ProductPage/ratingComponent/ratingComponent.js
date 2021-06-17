import React from 'react';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && 'starFill'} />;
};

export default ratingComponent;
