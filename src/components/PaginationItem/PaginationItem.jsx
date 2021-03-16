import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './PaginationItem.module.css';

const PaginationItem = ({
  isTruthy,
  isPageBtn,
  value,
  onChangePage,
  children
}) => {

  const changePageHandler = () => onChangePage(value);

  return (
    <button
      type="button"
      className={cx(s.btn, {
        [s.btnPage]: isPageBtn,
        [s.btnPageActive]: isTruthy && isPageBtn,
        [s.btnDisabled]: isTruthy && !isPageBtn
      })}
      disabled={isTruthy}
      onClick={changePageHandler}
    >
      {children}
    </button>
  );
};

PaginationItem.propTypes = {
  isTruthy: pt.bool.isRequired,
  isPageBtn: pt.bool.isRequired,
  value: pt.number.isRequired,
  onChangePage: pt.func.isRequired,
  children: pt.node.isRequired
};

export default memo(PaginationItem);
