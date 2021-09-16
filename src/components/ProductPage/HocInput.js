import React from 'react';

const HocInput = (WrappedComponent) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }
    
        handleChange(event) {
            let num = isNaN(parseInt(event.target.value)) ? '' : parseInt(event.target.value);
            this.props.handleChange(num);
        }

        render() {
            return (
                <WrappedComponent 
                    handleChange={this.handleChange}
                    {...this.props}
                />
            );
        }
    }
}

export default HocInput;
