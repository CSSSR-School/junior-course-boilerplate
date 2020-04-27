import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from '../pagination.module.scss';

const renderLink = (
  { pagination: { currentPage }, pagesLength, handleClick },
  type,
  value = type
) => {
  switch (type) {
    case 'prev':
      return (
        <Link
          to="/"
          className={classnames(
            styles.PaginationLink,
            styles.PaginationLinkPrev,
            {
              [styles.PaginationLinkDisabled]:
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
          to="/"
          className={classnames(styles.PaginationLink)}
          onClick={event => handleClick(event, 'dec')}
        >
          &hellip;
        </Link>
      );
    case 'inc':
      return (
        <Link
          to="/"
          className={classnames(styles.PaginationLink)}
          onClick={event => handleClick(event, 'inc')}
        >
          &hellip;
        </Link>
      );
    case 'next':
      return (
        <Link
          to="/"
          className={classnames(
            styles.PaginationLink,
            styles.PaginationLinkNext,
            {
              [styles.PaginationLinkDisabled]:
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
          to="/"
          key={value}
          className={classnames(styles.PaginationLink, {
            [styles.PaginationLinkActive]: value === currentPage
          })}
          onClick={handleClick}
        >
          {String(value)}
        </Link>
      );
  }
};

export { renderLink };
