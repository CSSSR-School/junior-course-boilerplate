import React from 'react';
import toInt from 'csssr-school-utils/lib/toInt';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const WithNumberMask = (WrappedComponent) => {
  class WithNumberMask extends React.Component {
    handleChange = (evt) => {
      const value = toInt(evt.target.value);
      const name = evt.target.name;

      this.props.onChange && this.props.onChange(name, value);
  };

    render() {
      return <WrappedComponent {...this.props} handleChange={this.handleChange}/>
    }
  }

  WithNumberMask.displayName = `WithMask(${getDisplayName(WrappedComponent)}`
    return WithNumberMask;
};

export default WithNumberMask;
