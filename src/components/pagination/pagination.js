import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './pagination.module.scss';
import Btn from './btn';

class Pagination extends React.Component {

  render() {
    const {
      pagination: { currentPage, upperPageBound, lowerPageBound },
      pagesLength,
    } = this.props;
    const pagesData = Array.from(
      { length: pagesLength },
      (value, index) => index + 1
    );
    const pages = pagesData.map(number => {
      if (number < upperPageBound + 1 && number > lowerPageBound) {
        return (
          <Btn
            key={number}
            classList={classnames(styles.PaginationBtn, {
              [styles.PaginationBtnActive]: number === currentPage
            })}
            value={String(number)}
            handleClick={event => this.props.handleClick(event, 'current')}
          />
        );
      }
      return null;
    });
    const inc =
    pagesData.length > upperPageBound ? (
        <Btn
          classList={classnames(styles.PaginationBtn)}
          value="&hellip;"
          handleClick={event => this.props.handleClick(event, 'inc')}
        />
      ) : null;
    const dec =
      lowerPageBound >= 1 ? (
        <Btn
          classList={classnames(styles.PaginationBtn)}
          value="&hellip;"
          handleClick={event => this.props.handleClick(event, 'dec')}
        />
      ) : null;
    const prev =
    pagesData.length !== 0 ? (
        <Btn
          classList={classnames(styles.PaginationBtn, styles.PaginationBtnPrev)}
          isDisabled={
            currentPage === 1 ||
            (pagesData !== currentPage && pagesData < 1)
          }
          value="Назад"
          handleClick={event => this.props.handleClick(event, 'prev')}
        />
      ) : null;
    const next =
    pagesData.length !== 0 ? (
        <Btn
          classList={classnames(styles.PaginationBtn, styles.PaginationBtnNext)}
          isDisabled={
            pagesData.length === currentPage ||
            (currentPage !== 1 && pagesData < 1)
          }
          value="Вперед"
          handleClick={event => this.props.handleClick(event, 'next')}
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
  pagesLength: propTypes.number,
  handleClick: propTypes.func,
};

export default Pagination;
