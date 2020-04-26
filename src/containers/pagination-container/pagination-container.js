import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  paginationActions,
  dataSelectors,
  paginationSelectors
} from '../../redux';

import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  getPagesTotalCount = (length, n) => Math.ceil(length / n);

  handleClick = (event, type) => {
    event.preventDefault();

    const {
      pagination: { currentPage, upperPageBound, pageBound },
      shiftPaginationPageBoundsBack,
      shiftPaginationPageBoundsForward,
      updatePaginationCurrentPage
    } = this.props;

    switch (type) {
      case 'prev':
        const prevPage = currentPage - 1;

        if (prevPage % pageBound === 0) {
          shiftPaginationPageBoundsBack();
        }

        updatePaginationCurrentPage({ currentPage: prevPage });
        break;
      case 'dec':
        const decPage = upperPageBound - pageBound;

        shiftPaginationPageBoundsBack();
        updatePaginationCurrentPage({
          currentPage: decPage
        });
        break;
      case 'inc':
        const incPage = upperPageBound + 1;

        shiftPaginationPageBoundsForward();
        updatePaginationCurrentPage({ currentPage: incPage });
        break;
      case 'next':
        const nextPage = currentPage + 1;

        if (nextPage > upperPageBound) {
          shiftPaginationPageBoundsForward();
        }
        updatePaginationCurrentPage({ currentPage: nextPage });
        break;
      default:
        const {
          target: { textContent }
        } = event;
        const value = Number(textContent);

        updatePaginationCurrentPage({ currentPage: value });
    }
  };
  render() {
    const { pagination, list } = this.props;
    const { itemsPerPage } = pagination;

    return (
      <Pagination
        pagination={pagination}
        pagesLength={this.getPagesTotalCount(list.length, itemsPerPage)}
        handleClick={this.handleClick}
      />
    );
  }
}

const { getFilteredData } = dataSelectors;
const { getPagination } = paginationSelectors;

const mapStateToProps = state => ({
  pagination: getPagination(state),
  list: getFilteredData(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(paginationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
