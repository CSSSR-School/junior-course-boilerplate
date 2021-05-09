import React from 'react';

import LogRender from '../LogRender/LogRender';

import { withNumberMask } from '../../hocs/withNumberMask';

class InputNumber extends LogRender {
  render() {
    return (
      <input
        {...this.props}
        type="number"
      />
    )
  }
}

export default withNumberMask(InputNumber);
