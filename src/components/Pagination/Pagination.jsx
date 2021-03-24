import React, {memo} from 'react';
import pt from 'prop-types';
import s from './Pagination.module.css';
import PaginationBtn from '../PaginationBtn/PaginationBtn.jsx';

const buttons = ['prev', 'start', 'middle', 'end', 'next'];

const Pagination = ({
  page,
  totalPages,
  minPagesCount,
  middlePagesCount,
  endPagesCount,
  onChangePage
}) => {

  const renderButtons = (buttons) => {
    return buttons.map((button) => (
      <PaginationBtn
        key={button}
        name={button}
        page={page}
        totalPages={totalPages}
        minPagesCount={minPagesCount}
        middlePagesCount={middlePagesCount}
        endPagesCount={endPagesCount}
        onChangePage={onChangePage}
      />
    ))
  }

  return (
    <div className={s.pagination}>
      {renderButtons(buttons)}
    </div>
  );
};

Pagination.propTypes = {
  totalPages: pt.number.isRequired,
  page: pt.number.isRequired,
  minPagesCount: pt.number.isRequired,
  middlePagesCount: pt.number.isRequired,
  endPagesCount: pt.number.isRequired,
  onChangePage: pt.func.isRequired
};

export default memo(Pagination);
