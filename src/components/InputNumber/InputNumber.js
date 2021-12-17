import React from 'react';
import InputHandler from '../InputHendler/InputHandler';

const InputNumber = ({defaultValue, name, handleChange }) => {
  return (
    <input type="number" className="price-block__input"
           defaultValue={defaultValue}
           name={name}
           onChange={handleChange}
    />
  );
}

export default InputHandler(InputNumber);
