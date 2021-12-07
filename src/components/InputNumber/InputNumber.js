import React from 'react';
import InputHandler from '../InputHendler/InputHandler';

const InputNumber = ({defaultValue, name, handleKeyControl, handleChange }) => {
  return (
    <input type="text" className="price-block__input"
           onKeyUp={handleKeyControl}
           defaultValue={defaultValue}
           name={name}
           onChange={handleChange}
    />
  );
}



export default InputHandler(InputNumber);
