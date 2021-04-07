import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './FormBlock.module.css';

const FormBlock = ({
  title,
  additionalClass = null,
  children
}) => {
  return (
    <div className={ cx(s.formBlock, {[s[additionalClass]]: additionalClass})}>
      <h3 className={s.title}>{title}</h3>
      <div className={cx(s.inputBlock)}>
        {children}
      </div>
    </div>
  );
};

FormBlock.propTypes = {
  title: pt.string.isRequired,
  children: pt.node.isRequired,
  additionalClass: pt.string,
};

export default memo(FormBlock);
