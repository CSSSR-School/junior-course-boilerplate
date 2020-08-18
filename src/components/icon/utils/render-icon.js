import React from 'react';
import propTypes from 'prop-types';
import ArrowIcon from '../arrow-icon';
import IllPlanetIcon from '../ill-planet-icon';
import IslandIcon from '../island-icon';
import RatingIcon from '../rating-icon';
import SpinnerIcon from '../spinner-icon';
import BasketIcon from '../basket-icon';
import TickIcon from '../tick-icon';

const renderIcon = props => {
  const { name } = props;

  switch (name) {
    case 'arrow':
      return <ArrowIcon {...props} />;
    case 'ill-planet':
      return <IllPlanetIcon {...props} />;
    case 'island':
      return <IslandIcon {...props} />;
    case 'rating':
      return <RatingIcon {...props} />;
    case 'spinner':
      return <SpinnerIcon {...props} />;
    case 'basket':
      return <BasketIcon {...props} />;
    case 'tick':
      return <TickIcon {...props} />;
    default:
      return;
  }
};

renderIcon.propTypes = {
  name: propTypes.string
};

export { renderIcon };
