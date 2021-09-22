import React from 'react';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled ? 'starFill' : undefined} />;
};

export default ratingComponent;
