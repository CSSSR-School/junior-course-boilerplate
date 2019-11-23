import React from 'react';
import HOC from "../../containers/HOC";
import s from './InputNumber.module.scss'

const InputNumber = props => {
  const { value, onChange } = props;

  return <input type="text"
                value={value}
                className={s.InputNumber}
                onChange={event=>onChange(event)} />;
};

export default HOC(InputNumber);
