import React from 'react';
import {logger} from 'csssr-school-utils';
import shallowCompare from 'react-addons-shallow-compare';

class LogRender extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        logger.call(this, this.constructor.name, nextProps, nextState);
        return shallowCompare(this, nextProps, nextState);
        // return true;
    }
};

export default LogRender;
