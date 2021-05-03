import React from 'react';

import { logRender } from '../../hocs/logRender';

const Rating = (props) => {
  const { isFilled } = props;

  return (
    <span>{ isFilled ? '★' : '☆' }</span>
  );
};

const RatingWithLog = logRender(Rating);

export default RatingWithLog;
