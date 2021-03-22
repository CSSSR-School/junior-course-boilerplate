import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Pagination.module.css';
import {generateCustomArray} from '../../helpers';
import PaginationItem from '../PaginationItem/PaginationItem.jsx';

const MIN_PAGES_COUNT = 5;
const MIDDLE_PAGES_COUNT = 3;
const END_PAGES_COUNT = 2;

const Pagination = ({page, totalPages, onChangePage}) => {

  const generatePages = (page, totalPages) => {

    if (totalPages <= MIN_PAGES_COUNT) {
      return generateCustomArray(totalPages, 1);
    }

    if (page >= totalPages - END_PAGES_COUNT) {
      return generateCustomArray(MIDDLE_PAGES_COUNT, totalPages - END_PAGES_COUNT);
    }

    if (page > MIDDLE_PAGES_COUNT) {
      return generateCustomArray(MIDDLE_PAGES_COUNT, page - 1);
    }

    return generateCustomArray(MIN_PAGES_COUNT, 1);
  }

  const changePageHandler = (value) => onChangePage(value);

  const renderFirstButtons = () => {
    return (
      <>
        {
          page > MIDDLE_PAGES_COUNT &&
          totalPages > MIN_PAGES_COUNT &&
          <>
            <PaginationItem
              isTruthy={page === 1}
              isPageBtn
              value={1}
              onChangePage={changePageHandler}
            >
              {1}
            </PaginationItem>
            <span className={cx(s.btn, s.btnPage)}>...</span>
          </>
        }
      </>
    )
  }

  const renderLastButtons = () => {
    return (
      <>
        {
          page < totalPages - END_PAGES_COUNT &&
          totalPages > MIN_PAGES_COUNT &&
          <>
            {
              totalPages > MIN_PAGES_COUNT + 1 &&
              <span className={cx(s.btn, s.btnPage)}>...</span>}
            <PaginationItem
              isTruthy={totalPages === page}
              isPageBtn
              value={totalPages}
              onChangePage={changePageHandler}
            >
              {totalPages}
            </PaginationItem>
          </>
        }
      </>
    )
  }

  const renderMiddleButtons = () => {
    return (
      <>
        {
          generatePages(page, totalPages).map((item) => {
            return (
              <PaginationItem
                key={item}
                isTruthy={item === page}
                isPageBtn
                value={item}
                onChangePage={changePageHandler}
              >
                {item}
              </PaginationItem>
            )
          })
        }
      </>
    )
  }

  return (
    <div className={s.pagination}>
      <PaginationItem
        isTruthy={page === 1}
        isPageBtn={false}
        value={page - 1}
        onChangePage={changePageHandler}
      >
        Назад
      </PaginationItem>
      {renderFirstButtons()}
      {renderMiddleButtons()}
      {renderLastButtons()}
      <PaginationItem
        isTruthy={totalPages === page}
        isPageBtn={false}
        value={page + 1}
        onChangePage={changePageHandler}
      >
        Вперед
      </PaginationItem>
    </div>
  )
}

Pagination.propTypes = {
  onChangePage: pt.func.isRequired,
  totalPages: pt.number.isRequired,
  page: pt.number.isRequired
}

export default memo(Pagination);
