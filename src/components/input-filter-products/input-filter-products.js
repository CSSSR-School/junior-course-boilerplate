import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './input-filter-products.scss';
import LogRender from '../log-render';

class InputFilterProducts extends LogRender {
  render() {
    const { initialValue, innerRef } = this.props;
    return (
      <input
        className={classnames(
          'filter-products__input',
          'input-filter-products'
        )}
        type="number"
        defaultValue={initialValue}
        ref={innerRef}
      />
    );
  }
}

InputFilterProducts.propTypes = {
  initialValue: propTypes.number,
  innerRef: propTypes.instanceOf(Object),
};

export default forwardRef((props, ref) => (
  <InputFilterProducts innerRef={ref} {...props} />
));
