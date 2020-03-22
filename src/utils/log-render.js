import logger from 'csssr-school-utils/lib/logger';

export const logRender = component => {
  component.prototype.shouldComponentUpdate = function(nextProps, nextState) {
    logger.call(this, component.name, nextProps, nextState);
    return true;
  };
};
