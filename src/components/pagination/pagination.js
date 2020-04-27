import React from 'react';
import propTypes from 'prop-types';

import styles from './pagination.module.scss';
import { renderLink } from './utils';

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
        renderLink(this.props, number)
      );
    });
    const inc =
      pagesData.length > upperPageBound && renderLink(this.props, 'inc');
    const dec = lowerPageBound >= 1 && renderLink(this.props, 'dec');
    const prev = pagesLength !== 0 && renderLink(this.props, 'prev');
    const next = pagesLength !== 0 && renderLink(this.props, 'next');

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
