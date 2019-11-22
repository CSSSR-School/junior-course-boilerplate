import React from 'react';

import s from './InputNumber.module.scss'

const InputNumber = props => {
    const {value, defaultValue, onChange} = props;
    const handleChange = (e) => {
        onChange(e.target.value.replace(/\D/,''))
    };
    return (
        <input type="text"
               value={value}
               defaultValue={defaultValue}
               className={s.InputNumber}
               onChange={handleChange}/>
    );
};

export default InputNumber;
