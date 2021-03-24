import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './PaginationNavBtn.module.css';

const PaginationNavBtn = ({
  isDisabled,
  value,
  onChangePage,
  children
}) => {

  const changePageHandler = () => onChangePage(value);

  return (
    <button
      type="button"
      className={cx(s.btn, {[s.btnDisabled]: isDisabled})}
      disabled={isDisabled}
      onClick={changePageHandler}
    >
      {children}
    </button>
  );
};

PaginationNavBtn.propTypes = {
  isDisabled: pt.bool.isRequired,
  value: pt.number.isRequired,
  onChangePage: pt.func.isRequired,
  children: pt.node.isRequired
};

export default memo(PaginationNavBtn);
