import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../components/LogRender/LogRender';

const NUMBER_MASK = /^[0-9]*$/;

export const withNumberMask = (InputComponent) => {
  class WithNumberMask extends LogRender {
    handleValueChange = (evt) => {
      const { value } = evt.target;
      if (NUMBER_MASK.test(value)) {
        const numValue = Number(value);
        this.props.onChange && this.props.onChange(numValue);
      }
    };

    render() {
      const { onChange, ...restProps} = this.props;
      return (
        <InputComponent
          { ...restProps }
          onChange={ this.handleValueChange }
          value={ this.props.value }
        />
      );
    }
  };

  WithNumberMask.propTypes = {
    value: PropTypes.number.isRequired,
  }

  return WithNumberMask;
}
