import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './pagination.module.scss';
import Btn from './btn';

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
  };

  handleIncClick = () => {
    const {
      pagination: { upperPageBound },
      updatePaginationCurrentPage,
      shiftPaginationPageBoundsForward
    } = this.props;
    shiftPaginationPageBoundsForward();
    updatePaginationCurrentPage({ currentPage: upperPageBound + 1 });
  };

  handleDecClick = () => {
    const {
      pagination: { upperPageBound, pageBound },
      updatePaginationCurrentPage,
      shiftPaginationPageBoundsBack
    } = this.props;
    shiftPaginationPageBoundsBack();
    updatePaginationCurrentPage({ currentPage: upperPageBound - pageBound });
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
  };

  render() {
    const {
      pagination: { currentPage, itemsPerPage, upperPageBound, lowerPageBound },
      list: productsList
    } = this.props;
    const pagesTotalCount = Array.from(
      { length: this.getPagesTotalCount(productsList.length, itemsPerPage) },
      (value, index) => index + 1
    );
    const pages = pagesTotalCount.map(number => {
      if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <Btn
            key={number}
            classList={classnames(
              styles.PaginationBtn,
              styles.PaginationBtnPage,
              {
                [styles.PaginationBtnActive]: number === currentPage
              }
            )}
            onClick={this.handleClick}
            value={String(number)}
          />
        );
      }
      return null;
    });
    const inc =
      pagesTotalCount.length > upperPageBound ? (
        <Btn
          classList={classnames(styles.PaginationBtn, styles.PaginationBtnInc)}
          handleClick={this.handleIncClick}
          value="&hellip;"
        />
      ) : null;
    const dec =
      lowerPageBound >= 1 ? (
        <Btn
          classList={classnames(styles.PaginationBtn, styles.PaginationBtnDec)}
          handleClick={this.handleDecClick}
          value="&hellip;"
        />
      ) : null;
    const prev =
      pages.length !== 0 ? (
        <Btn
          classList={classnames(styles.PaginationBtn, styles.PaginationBtnPrev)}
          handleClick={this.handlePrevClick}
          isDisabled={
            currentPage === 1 ||
            (pagesTotalCount !== currentPage && pagesTotalCount < 1)
          }
          value="Назад"
        />
      ) : null;
    const next =
      pages.length !== 0 ? (
        <Btn
          classList={classnames(styles.PaginationBtn, styles.PaginationBtnNext)}
          handleClick={this.handleNextClick}
          isDisabled={
            pagesTotalCount.length === currentPage ||
            (currentPage !== 1 && pagesTotalCount < 1)
          }
          value="Вперед"
        />
      ) : null;

    return (
      <div className={styles.Pagination}>
        <ul className={styles.PaginationList}>
          {prev}
          {dec}
          {pages}
          {inc}
          {next}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pagination: propTypes.shape({
    currentPage: propTypes.number,
    itemsPerPage: propTypes.number,
    upperPageBound: propTypes.number,
    lowerPageBound: propTypes.number,
    pageBound: propTypes.number
  }),
  list: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isInStock: propTypes.bool,
      img: propTypes.string,
      title: propTypes.node,
      price: propTypes.node,
      subPriceContent: propTypes.node,
      maxRating: propTypes.number,
      rating: propTypes.number,
      discount: propTypes.number,
      category: propTypes.string
    })
  ),
  updatePaginationCurrentPage: propTypes.func,
  shiftPaginationPageBoundsBack: propTypes.func,
  shiftPaginationPageBoundsForward: propTypes.func
};

export default Pagination;
