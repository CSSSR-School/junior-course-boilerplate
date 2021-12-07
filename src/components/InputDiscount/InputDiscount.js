import React from 'react';
import InputHandler from '../InputHendler/InputHandler';
import Discount from 'csssr-school-discount';

const InputDiscount = ({name, title, value, handleChange, handleKeyControl }) => {
  return (
    <Discount type="text" className="price-block__input"
              title={title}
              name={name}
              value={value}
              onChange={handleChange}
              onKeyUp={handleKeyControl}
    />
  );
}



export default InputHandler(InputDiscount);
