import React from 'react';


export default function HOC(HoccedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: ''
      };
    }

    handleChange = event => {
        console.info(event.target.value);
      this.setState(
        {
          // value: event.target.value.replace(/\D/,'')
          value: event.target.value
        }
      );
    };

    render() {
      return (
        <>
          <HoccedComponent
            onChange={this.handleChange}
            value={this.state.value}
            {...this.props}
          />
        </>
      );
    }
  };
}
