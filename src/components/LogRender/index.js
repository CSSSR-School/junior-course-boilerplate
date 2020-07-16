import React from 'react';
import logger from 'csssr-school-utils/lib/logger';
import shallowCompare from 'react-addons-shallow-compare';

export default class LogRender extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const isStateOrPropsChanged = shallowCompare(this, nextProps, nextState);

    if (!isStateOrPropsChanged) {
      return false;
    }

    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }
}
