import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from '../pagination.module.scss';

const renderButton = (
  { pagination: { currentPage }, pagesLength, handleClick },
  type,
  value = type
) => {
  switch (type) {
    case 'prev':
      return (
        <Link
          to={location => `${location.pathname}${location.search}`}
          className={classnames(
            styles.PaginationBtn,
            styles.PaginationBtnPrev,
            {
              [styles.PaginationBtnDisabled]:
                currentPage === 1 ||
                (pagesLength !== currentPage && pagesLength < 1)
            }
          )}
          onClick={event => handleClick(event, 'prev')}
        >
          Назад
        </Link>
      );
    case 'dec':
      return (
        <Link
          to={location => `${location.pathname}${location.search}`}
          className={classnames(styles.PaginationBtn)}
          onClick={event => handleClick(event, 'dec')}
        >
          &hellip;
        </Link>
      );
    case 'inc':
      return (
        <Link
          to={location => `${location.pathname}${location.search}`}
          className={classnames(styles.PaginationBtn)}
          onClick={event => handleClick(event, 'inc')}
        >
          &hellip;
        </Link>
      );
    case 'next':
      return (
        <Link
          to={location => `${location.pathname}${location.search}`}
          className={classnames(
            styles.PaginationBtn,
            styles.PaginationBtnNext,
            {
              [styles.PaginationBtnDisabled]:
                pagesLength === currentPage ||
                (currentPage !== 1 && pagesLength < 1)
            }
          )}
          onClick={event => handleClick(event, 'next')}
        >
          Вперед
        </Link>
      );
    default:
      return (
        <Link
          to={location => {
            return `${location.pathname}${location.search}`;
          }}
          key={type}
          className={classnames(styles.PaginationBtn, {
            [styles.PaginationBtnActive]: value === currentPage
          })}
          onClick={event => handleClick(event, null, value)}
        >
          {value}
        </Link>
      );
  }
};

export { renderButton };
