import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './PaginationPageBtn.module.css';

const PaginationPageBtn = ({
  isActive,
  value,
  onChangePage,
  children
}) => {

  const changePageHandler = () => onChangePage(value);

  return (
    <button
      type="button"
      className={cx(s.btn, s.btnPage, {[s.btnPageActive]: isActive})}
      disabled={isActive}
      onClick={changePageHandler}
    >
      {children}
    </button>
  );
};

PaginationPageBtn.propTypes = {
  isActive: pt.bool.isRequired,
  value: pt.number.isRequired,
  onChangePage: pt.func.isRequired,
  children: pt.node.isRequired
};

export default memo(PaginationPageBtn);
