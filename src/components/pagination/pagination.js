import React from 'react';
import propTypes from 'prop-types';
import styles from './pagination.module.scss';
import { renderButton } from './utils';

class Pagination extends React.Component {
  render() {
    const {
      pagesRange: { upperPageBound, lowerPageBound },
      pagesLength
    } = this.props;

    if (pagesLength !== 0) {
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

    return null;
  }
}

Pagination.propTypes = {
  pageBound: propTypes.number,
  currentPage: propTypes.number,
  pagesRange: propTypes.shape({
    lowerPageBound: propTypes.number,
    upperPageBound: propTypes.number
  }),
  pagesLength: propTypes.number,
  updateSearchWithCurrentPage: propTypes.func
};

export default Pagination;
