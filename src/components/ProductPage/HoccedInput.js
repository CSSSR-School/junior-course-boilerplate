import React from 'react';

function isNumericOrEmpty(str) {
    if (!isNaN(str) && !isNaN(parseFloat(str))) {
        return true;
    } else if(str === '') {
        return true;
    }
}

const HoccedInput = (WrappedComponent) => {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }
    
        handleChange(event) {
            if (isNumericOrEmpty(event.target.value)) {
                this.props.handleChange(event);
            }
        }
    
        render() {
            return (
                <WrappedComponent 
                    {...this.props}
                    handleChange={this.handleChange}
                />
            );
        }
    }
 }

 export default HoccedInput;
