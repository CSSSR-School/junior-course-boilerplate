import React from 'react';
import logger from 'csssr-school-utils';

function LogRender(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }
    
        shouldComponentUpdate(nextProps, nextState) {
            logger.call(this, this.constructor.name, nextProps, nextState);
            return true;
        }
    
        render() {
            return <WrappedComponent />;
        }
    };
}

export default LogRender;
