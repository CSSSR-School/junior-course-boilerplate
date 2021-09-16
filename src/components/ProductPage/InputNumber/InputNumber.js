import React from 'react';
import HocInput from '../HocInput';

const FilterInput = (props) => (
    <input
        className={props.className}
        value={props.inputValue}
        onChange={props.handleChange}
    />
);

const HoccedFilterInput = HocInput(FilterInput);

export default HoccedFilterInput;
