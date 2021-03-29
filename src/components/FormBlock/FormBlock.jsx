import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './FormBlock.module.css';

const FormBlock = ({title, children}) => {
  return (
    <>
      <h3 className={s.title}>{title}</h3>
      <div className={cx(s.formBlock)}>
        {children}
      </div>
    </>
  );
};

FormBlock.propTypes = {
  title: pt.string.isRequired,
  children: pt.node.isRequired
};

export default memo(FormBlock);
