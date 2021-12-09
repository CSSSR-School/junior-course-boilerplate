import { Component } from 'react';
import {logger} from 'csssr-school-utils';
import shallowCompare from 'react-addons-shallow-compare';

class logRender extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);
    return shallowCompare(this, nextProps, nextState);
  }
}

export default logRender;
