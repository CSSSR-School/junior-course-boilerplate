import React from 'react';
import toInt from 'csssr-school-utils/lib/toInt';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const WithNumberMask = (WrappedComponent) => {
  class WithNumberMask extends React.Component {
    handleChange = (evt) => {
      const inputValue = toInt(evt.target.value);
      this.props.onChange && this.props.onChange(evt, inputValue);
  };

    render() {
      return <WrappedComponent {...this.props} handleChange={this.handleChange}/>
    }
  }

  WithNumberMask.displayName = `WithMask(${getDisplayName(WrappedComponent)}`
    return WithNumberMask;
};

export default WithNumberMask;
