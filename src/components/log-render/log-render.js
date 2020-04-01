import { Component } from 'react';
import { logger } from 'csssr-school-utils';
import shallowCompare from 'react-addons-shallow-compare';

class LogRender extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (shallowCompare(this, nextProps, nextState)) {
      logger.call(this, this.constructor.name, nextProps, nextState);
      return true;
    }
    return false;
  }
}

export default LogRender;
