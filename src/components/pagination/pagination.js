import React from 'react';
import propTypes from 'prop-types';

import styles from './pagination.module.scss';
import { renderButton } from './utils';

class Pagination extends React.Component {
  render() {
    const {
      pagination: { upperPageBound, lowerPageBound },
      pagesLength
    } = this.props;
    const pagesData = Array.from(
      { length: pagesLength },
      (value, index) => index + 1
    );
    const pages = pagesData.map(number => {
      return (
        number < upperPageBound + 1 &&
        number > lowerPageBound &&
        renderButton(this.props, number)
      );
    });
    const inc =
      pagesData.length > upperPageBound && renderButton(this.props, 'inc');
    const dec = lowerPageBound >= 1 && renderButton(this.props, 'dec');
    const prev = pagesLength !== 0 && renderButton(this.props, 'prev');
    const next = pagesLength !== 0 && renderButton(this.props, 'next');

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
  handleClick: propTypes.func
};

export default Pagination;
