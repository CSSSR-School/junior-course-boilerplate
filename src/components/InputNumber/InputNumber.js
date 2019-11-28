import React from 'react';
import inputHOC from '../../containers/inputHOC';
import s from './InputNumber.module.scss'

const InputNumber = props => {
    const {value, onChange} = props;
    return (
        <input type="text"
               className={s.InputNumber}
               value={value}
               onChange={onChange}
        />
    );
};

export default inputHOC(InputNumber);
