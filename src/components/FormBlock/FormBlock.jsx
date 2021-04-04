import React, {memo} from 'react';
import pt from 'prop-types';
import s from './FormBlock.module.css';

const FormBlock = ({title, children}) => {
  return (
    <div className={s.formBlock}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.inputBlock}>
        {children}
      </div>
    </div>
  );
};

FormBlock.propTypes = {
  title: pt.string.isRequired,
  children: pt.node.isRequired
};

export default memo(FormBlock);
