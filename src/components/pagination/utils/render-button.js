import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from '../pagination.module.scss';

const renderButton = (
  {
    currentPage,
    pageBound,
    pagesRange: { upperPageBound },
    pagesLength,
    updateSearchWithCurrentPage
  },
  type,
  value = type
) => {
  switch (type) {
    case 'prev':
      const prevPage = currentPage - 1;

      return (
        <Link
          to={updateSearchWithCurrentPage(prevPage)}
          className={classnames(
            styles.PaginationBtn,
            styles.PaginationBtnPrev,
            {
              [styles.PaginationBtnDisabled]:
                currentPage === 1 ||
                (pagesLength !== currentPage && pagesLength < 1)
            }
          )}
        >
          Назад
        </Link>
      );

    case 'dec':
      const decPage = upperPageBound - pageBound;

      return (
        <Link
          to={updateSearchWithCurrentPage(decPage)}
          className={classnames(styles.PaginationBtn)}
        >
          &hellip;
        </Link>
      );

    case 'inc':
      const incPage = upperPageBound + 1;

      return (
        <Link
          to={updateSearchWithCurrentPage(incPage)}
          className={classnames(styles.PaginationBtn)}
        >
          &hellip;
        </Link>
      );

    case 'next':
      const nextPage = currentPage + 1;

      return (
        <Link
          to={updateSearchWithCurrentPage(nextPage)}
          className={classnames(
            styles.PaginationBtn,
            styles.PaginationBtnNext,
            {
              [styles.PaginationBtnDisabled]:
                pagesLength === currentPage ||
                (currentPage !== 1 && pagesLength < 1)
            }
          )}
        >
          Вперед
        </Link>
      );

    default:
      return (
        <Link
          to={updateSearchWithCurrentPage(value)}
          key={type}
          className={classnames(styles.PaginationBtn, {
            [styles.PaginationBtnActive]: currentPage === value
          })}
        >
          {value}
        </Link>
      );
  }
};

export { renderButton };
