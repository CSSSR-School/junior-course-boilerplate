import React from "react";
import toInt from "csssr-school-utils/lib/toInt";

const WithMask = (OriginalComponent) => {
    return class extends React.Component {
        handleChange = (evt) => {
            const inputValue = toInt(evt.target.value);
            this.props.onChange && this.props.onChange(evt, inputValue);
        };

        render() {
            return <OriginalComponent {...this.props} handleChange = {this.handleChange}/>
        }
    }
};

export default WithMask;