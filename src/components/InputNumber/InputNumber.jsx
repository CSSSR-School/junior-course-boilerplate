import React from 'react';

import LogRender from '../LogRender/LogRender';

import { withNumberMask } from '../../hocs/withNumberMask';

class InputNumber extends LogRender {
  render() {
    const { inputRef, ...restProps } = this.props;
    return (
      <input
        ref={ inputRef }
        {...restProps}
        type="number"
      />
    )
  }
}

export default withNumberMask(InputNumber);
