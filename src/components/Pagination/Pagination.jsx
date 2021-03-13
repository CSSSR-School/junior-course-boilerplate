import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Pagination.module.css';
import {PRODUCTS_PER_PAGE} from '../../consts';
import {generateCustomArray} from '../../helpers';
import LogRender from '../LogRender/LogRender';
//import ReactPaginate from "react-paginate";

const MIN_PAGINATION_PAGES_COUNT = 5;
const MIDDLE_PAGINATION_PAGES_COUNT = 3;
const END_PAGINATION_PAGES_COUNT = 2;

class Pagination extends LogRender {

  // render() {
  //   const {page, onChangePage} = this.props;
  //   const totalPages = Math.ceil(this.props.totalProducts / PRODUCTS_PER_PAGE);

  //   console.log(page)

  //   return (
  //     <ReactPaginate
  //       previousLabel={'Назад'}
  //       nextLabel={'Вперед'}
  //       breakLabel={'...'}
  //       breakClassName={'break-me'}
  //       pageCount={totalPages}
  //       marginPagesDisplayed={2}
  //       pageRangeDisplayed={3}
  //       onPageChange={onChangePage}
  //       containerClassName={"pagination"}
  //       subContainerClassName={'pages pagination'}
  //       activeClassName={"active"}
  //     />
  //   )
  // }

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

  render() {
    const {page, onChangePage} = this.props;
    const totalPages = Math.ceil(this.props.totalProducts / PRODUCTS_PER_PAGE);

    return (
      <div className={s.pagination}>
        <button
          className={cx(s.btn, {[s.btnDisabled]: page === 1})}
          type="button"
          disabled={page === 1}
          onClick={() => onChangePage(page - 1)}
        >
          Назад
        </button>
        {
          page > MIDDLE_PAGINATION_PAGES_COUNT &&
          totalPages > MIN_PAGINATION_PAGES_COUNT &&
          <>
            <button
              type="button"
              className={cx(s.btn, s.btnPage, {[s.btnPageActive]: page === 1})}
              onClick={() => onChangePage(1)}
            >
              {1}
            </button>
            <span className={cx(s.btn, s.btnPage)}>...</span>
          </>
        }
        {
          this.generatePages(page, totalPages).map((item) => {
            return (
              <button
                key={item}
                type="button"
                className={cx(s.btn, s.btnPage, {[s.btnPageActive]: item === page})}
                disabled={item === page}
                onClick={() => onChangePage(item)}
              >
                {item}
              </button>
            )
          })
        }
        {
          page < totalPages - END_PAGINATION_PAGES_COUNT &&
          totalPages > MIN_PAGINATION_PAGES_COUNT &&
          <>
            {totalPages > MIN_PAGINATION_PAGES_COUNT + 1 && <span className={cx(s.btn, s.btnPage)}>...</span>}
            <button
              type="button"
              className={cx(s.btn, s.btnPage, {[s.btnPageActive]: totalPages === page})}
              onClick={() => onChangePage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        }
        <button
          className={cx(s.btn, {[s.btnDisabled]: totalPages === page})}
          type="button"
          disabled={totalPages === page}
          onClick={() => onChangePage(page + 1)}
        >
          Вперед
        </button>
      </div>
    )
  }
}

Pagination.propTypes = {
  onChangePage: pt.func.isRequired,
  page: pt.number.isRequired
}

export default Pagination;
