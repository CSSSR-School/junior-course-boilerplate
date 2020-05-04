import React from 'react';

import Arrow from './Arrow';
import IllPlanet from './IllPlanet';
import Rating from './Rating';
import Spinner from './Spinner';

const Icon = props => {
  switch (props.name) {
    case 'arrow':
      return <Arrow {...props} />;
    case 'ill-planet':
      return <IllPlanet {...props} />;
    case 'rating':
      return <Rating {...props} />;
      case 'spinner':
        return <Spinner {...props} />;
    default:
      return;
  }
};

export default Icon;
