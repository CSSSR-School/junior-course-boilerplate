import React from 'react';
import HoccedInput from '../HoccedInput';

const InputNumber = (props) => {
    return (
        <input
            className={props.className}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
        />
    );
}

const HoccedInputNumber = HoccedInput(InputNumber);

export default HoccedInputNumber;
