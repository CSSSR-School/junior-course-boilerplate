import React from 'react';
// import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './pagination.module.scss';

class Pagination extends React.Component {
  getPagesTotalCount = (length, n) => Math.ceil(length / n);

  handleClick = event => {
    const { updatePaginationCurrentPage } = this.props;
    event.preventDefault();
    const {
      target: { textContent }
    } = event;
    const value = Number(textContent);

    updatePaginationCurrentPage({ currentPage: value });
    this.updatePrevNext(value);
  };

  updatePrevNext = value => {
    const {
      pagination: { itemsPerPage },
      list: productsList,
      makePaginationControlsActive,
      makePaginationControlsInactive,
      makePaginationControlPrevActive,
      makePaginationControlNextActive
    } = this.props;
    const pagesTotalCount = this.getPagesTotalCount(
      productsList.length,
      itemsPerPage
    );
    makePaginationControlsInactive();
    if (pagesTotalCount === value && pagesTotalCount > 1) {
      makePaginationControlPrevActive();
    } else if (value === 1 && pagesTotalCount > 1) {
      makePaginationControlNextActive();
    } else if (pagesTotalCount > 1) {
      makePaginationControlsActive();
    }
  };

  handleIncClick = () => {
    const {
      pagination: { upperPageBound },
      updatePaginationCurrentPage,
      shiftPaginationPageBoundsForward
    } = this.props;
    shiftPaginationPageBoundsForward();
    updatePaginationCurrentPage({ currentPage: upperPageBound + 1 });

    const {
      pagination: { currentPage }
    } = this.props;
    this.updatePrevNext(currentPage);
  };

  handleDecClick = () => {
    const {
      pagination: { upperPageBound, pageBound },
      updatePaginationCurrentPage,
      shiftPaginationPageBoundsBack
    } = this.props;
    shiftPaginationPageBoundsBack();
    updatePaginationCurrentPage({ currentPage: upperPageBound - pageBound });

    const {
      pagination: { currentPage }
    } = this.props;
    this.updatePrevNext(currentPage);
  };

  handlePrevClick = () => {
    const {
      pagination: { currentPage, pageBound },
      shiftPaginationPageBoundsBack,
      updatePaginationCurrentPage
    } = this.props;
    const prevPage = currentPage - 1;
    if (prevPage % pageBound === 0) {
      shiftPaginationPageBoundsBack();
    }

    updatePaginationCurrentPage({ currentPage: prevPage });
    this.updatePrevNext(prevPage);
  };

  handleNextClick = () => {
    const {
      pagination: { currentPage, upperPageBound },
      shiftPaginationPageBoundsForward,
      updatePaginationCurrentPage
    } = this.props;
    const nextPage = currentPage + 1;

    if (nextPage > upperPageBound) {
      shiftPaginationPageBoundsForward();
    }
    updatePaginationCurrentPage({ currentPage: nextPage });
    this.updatePrevNext(nextPage);
  };

  render() {
    const {
      pagination: {
        currentPage,
        itemsPerPage,
        upperPageBound,
        lowerPageBound,
        isPrevActive,
        isNextActive
      },
      list: productsList
    } = this.props;
    const pagesTotalCount = Array.from(
      { length: this.getPagesTotalCount(productsList.length, itemsPerPage) },
      (value, index) => index + 1
    );
    const pages = pagesTotalCount.map(number => {
      if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <button
            key={number}
            className={classnames(
              styles.paginationBtn,
              styles.paginationBtnPage,
              {
                [styles.paginationBtnActive]: number === currentPage
              }
            )}
            onClick={this.handleClick}
          >
            {number}
          </button>
        );
      }
      return null;
    });
    const inc =
      pagesTotalCount.length > upperPageBound ? (
        <button className={classnames(styles.paginationBtn, styles.paginationBtnInc)} onClick={this.handleIncClick}>
          &hellip;
        </button>
      ) : null;
    const dec =
      lowerPageBound >= 1 ? (
        <button className={classnames(styles.paginationBtn, styles.paginationBtnDec)} onClick={this.handleDecClick}>
          &hellip;
        </button>
      ) : null;
    const prev = (
      <button
        className={classnames(styles.paginationBtn, styles.paginationBtnPrev)}
        onClick={this.handlePrevClick}
        disabled={!isPrevActive}
      >
        Назад
      </button>
    );
    const next = (
      <button
        className={classnames(styles.paginationBtn, styles.paginationBtnNext)}
        onClick={this.handleNextClick}
        disabled={!isNextActive || pagesTotalCount.length === currentPage}
      >
        Вперед
      </button>
    );

    return (
      <>
        <div className={styles.pagination}>
          <ul className={styles.paginationList}>
            {prev}
            {dec}
            {pages}
            {inc}
            {next}
          </ul>
        </div>
      </>
    );
  }
}

// Pagination.propTypes = {
//   productsList: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.number,
//       isInStock: propTypes.bool,
//       img: propTypes.string,
//       title: propTypes.node,
//       price: propTypes.node,
//       subPriceContent: propTypes.node,
//       maxRating: propTypes.number,
//       rating: propTypes.number,
//       discount: propTypes.number,
//       category: propTypes.string
//     })
//   )
// };

export default Pagination;
