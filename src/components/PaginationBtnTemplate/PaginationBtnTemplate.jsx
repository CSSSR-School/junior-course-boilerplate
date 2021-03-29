import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './PaginationBtnTemplate.module.css';
import PaginationPageBtn from '../PaginationPageBtn/PaginationPageBtn.jsx';
import PaginationNavBtn from '../PaginationNavBtn/PaginationNavBtn.jsx';
import {getRange} from '../../helpers';

const PaginationBtnTemplate = ({
  name,
  page,
  totalPages,
  minPagesCount,
  middlePagesCount,
  endPagesCount,
  onChangePage
}) => {

  const generatePageButtons = (page, totalPages) => {

    if (totalPages <= minPagesCount) {
      return getRange(totalPages, 1);
    }

    if (page >= totalPages - endPagesCount) {
      return getRange(middlePagesCount, totalPages - endPagesCount);
    }

    if (page > middlePagesCount) {
      return getRange(middlePagesCount, page - 1);
    }

    return getRange(minPagesCount, 1);
  };

  const renderTemplate = () => {
    let template;

    switch (name) {
      case 'prev':
        template = (
          <PaginationNavBtn
            isDisabled={page === 1}
            value={page - 1}
            onChangePage={onChangePage}
          >
            Назад
          </PaginationNavBtn>
        );
        break;
      case 'next':
        template = (
          <PaginationNavBtn
            isDisabled={page === totalPages}
            value={page + 1}
            onChangePage={onChangePage}
          >
            Вперед
          </PaginationNavBtn>
          );
        break;
      case 'start':
        template = (
          <>
            {
              page > middlePagesCount && totalPages > minPagesCount &&
              <>
                <PaginationPageBtn
                  isActive={page === 1}
                  value={1}
                  onChangePage={onChangePage}
                >
                  {1}
                </PaginationPageBtn>
                <button className={cx(s.btn, s.btnPage)} disabled>...</button>
              </>
            }
          </>
        );
        break;
      case 'middle':
        template = (
          <>
            {
              generatePageButtons(page, totalPages).map((item) => {
                return (
                  <PaginationPageBtn
                    key={item}
                    isActive={item === page}
                    value={item}
                    onChangePage={onChangePage}
                  >
                    {item}
                  </PaginationPageBtn>
                );
              })
            }
          </>
        );
        break;
      case 'end':
        template = (
          <>
            {
              page < totalPages - endPagesCount &&
              totalPages > minPagesCount &&
              <>
                {
                  totalPages > minPagesCount + 1 &&
                  <button className={cx(s.btn, s.btnPage)} disabled>...</button>
                }
                <PaginationPageBtn
                  isActive={totalPages === page}
                  value={totalPages}
                  onChangePage={onChangePage}
                >
                  {totalPages}
                </PaginationPageBtn>
              </>
            }
          </>
        );
        break;
      default:
        template = null;
    }

    return template;
  };

  return renderTemplate();
};

PaginationBtnTemplate.propTypes = {
  name: pt.string.isRequired,
  page: pt.number.isRequired,
  totalPages: pt.number.isRequired,
  minPagesCount: pt.number.isRequired,
  middlePagesCount: pt.number.isRequired,
  endPagesCount: pt.number.isRequired,
  onChangePage: pt.func.isRequired
};

export default memo(PaginationBtnTemplate);
