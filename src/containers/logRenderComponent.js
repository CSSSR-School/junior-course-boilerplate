import shallowCompare from 'react-addons-shallow-compare';
import {logger} from 'csssr-school-utils'

export default function logRenderComponent(WrappedComponent) {
    return class extends WrappedComponent {
        shouldComponentUpdate(nextProps, nextState) {
            if (shallowCompare(this, nextProps, nextState)) {
                logger.call(this, super.constructor.name, nextProps, nextState);
                return true
            } else {
                return false
            }
        }

        render() {
            return super.render()
        }

    };
}

