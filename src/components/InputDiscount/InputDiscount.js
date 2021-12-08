import React from 'react';
import InputHandler from '../InputHendler/InputHandler';
import Discount from 'csssr-school-discount';

const InputDiscount = ({name, title, value, handleChange}) => {
  return (
    <Discount type="text" title={title} name={name} value={value} onChange={handleChange} />
  );
}



export default InputHandler(InputDiscount);
