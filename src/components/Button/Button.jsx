import React, {memo} from 'react';
import pt from 'prop-types';
import s from './Button.module.css';

const Button = (props) => {

  const {children} = props;

  return (
    <button
      className={s.btn}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: pt.node.isRequired
};

export default memo(Button);
