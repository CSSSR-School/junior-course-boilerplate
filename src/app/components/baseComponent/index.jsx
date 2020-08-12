import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import { logger } from 'csssr-school-utils';

class BaseComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (shallowCompare(this, nextProps, nextState)) {
      logger.call(this, this.constructor.name, nextProps, nextState);

      return true;
    }

    return false;
  }
}

export default BaseComponent;
