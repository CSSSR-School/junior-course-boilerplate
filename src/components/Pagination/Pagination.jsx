import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Pagination.module.css';
import {PRODUCTS_PER_PAGE} from '../../consts';
import {generateCustomArray} from '../../helpers';
import LogRender from '../LogRender/LogRender';
import PaginationItem from '../PaginationItem/PaginationItem.jsx';

const MIN_PAGINATION_PAGES_COUNT = 5;
const MIDDLE_PAGINATION_PAGES_COUNT = 3;
const END_PAGINATION_PAGES_COUNT = 2;

class Pagination extends LogRender {

  generatePages = (page, totalPages) => {

    if (totalPages <= MIN_PAGINATION_PAGES_COUNT) {
      return generateCustomArray(totalPages, 1);
    }

    if (page >= totalPages - END_PAGINATION_PAGES_COUNT) {
      return generateCustomArray(MIDDLE_PAGINATION_PAGES_COUNT, totalPages - END_PAGINATION_PAGES_COUNT);
    }

    if (page > MIDDLE_PAGINATION_PAGES_COUNT) {
      return generateCustomArray(MIDDLE_PAGINATION_PAGES_COUNT, page - 1);
    }

    return generateCustomArray(MIN_PAGINATION_PAGES_COUNT, 1);
  }

  changePageHandler = (value) => this.props.onChangePage(value);

  render() {
    const {page} = this.props;
    const totalPages = Math.ceil(this.props.totalProducts / PRODUCTS_PER_PAGE);

    return (
      <div className={s.pagination}>
        <PaginationItem
          isTruthy={page === 1}
          isPageBtn={false}
          value={page - 1}
          onChangePage={this.changePageHandler}
        >
          Назад
        </PaginationItem>
        {
          page > MIDDLE_PAGINATION_PAGES_COUNT &&
          totalPages > MIN_PAGINATION_PAGES_COUNT &&
          <>
            <PaginationItem
              isTruthy={page === 1}
              isPageBtn
              value={1}
              onChangePage={this.changePageHandler}
            >
              {1}
            </PaginationItem>
            <span className={cx(s.btn, s.btnPage)}>...</span>
          </>
        }
        {
          this.generatePages(page, totalPages).map((item) => {
            return (
              <PaginationItem
                key={item}
                isTruthy={item === page}
                isPageBtn
                value={item}
                onChangePage={this.changePageHandler}
              >
                {item}
              </PaginationItem>
            )
          })
        }
        {
          page < totalPages - END_PAGINATION_PAGES_COUNT &&
          totalPages > MIN_PAGINATION_PAGES_COUNT &&
          <>
            {totalPages > MIN_PAGINATION_PAGES_COUNT + 1 && <span className={cx(s.btn, s.btnPage)}>...</span>}
            <PaginationItem
              isTruthy={totalPages === page}
              isPageBtn
              value={totalPages}
              onChangePage={this.changePageHandler}
            >
              {totalPages}
            </PaginationItem>
          </>
        }
        <PaginationItem
          isTruthy={totalPages === page}
          isPageBtn={false}
          value={page + 1}
          onChangePage={this.changePageHandler}
        >
          Вперед
        </PaginationItem>
      </div>
    )
  }
}

Pagination.propTypes = {
  onChangePage: pt.func.isRequired,
  page: pt.number.isRequired
}

export default Pagination;
