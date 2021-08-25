import React from 'react';
import {logger} from 'csssr-school-utils';

class LogRender extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        logger.call(this, this.constructor.name, nextProps, nextState);
        return true;
    }
};

export default LogRender;
