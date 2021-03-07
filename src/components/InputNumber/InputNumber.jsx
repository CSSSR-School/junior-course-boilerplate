import React from 'react';
import pt from 'prop-types';
import LogRender from '../LogRender/LogRender';
import withInput from '../../hocs/withInput';

class InputNumber extends LogRender {

  render() {
    const {name, value, onChange} = this.props;

    return (
      <input
        name={name}
        value={value}
        onChange={onChange}
      />
    )
  }
}

InputNumber.propTypes = {
  name: pt.string.isRequired,
  value: pt.number.isRequired,
  onChange: pt.func.isRequired
};

export default withInput(InputNumber);
