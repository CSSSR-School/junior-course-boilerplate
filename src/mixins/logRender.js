import {logger} from 'csssr-school-utils'

const logRender = {
    shouldComponentUpdate(nextProps, nextState) {
        logger.call(this, this.constructor.name, nextProps, nextState);
        return true
    }
};

export default logRender
