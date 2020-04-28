import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  paginationActions,
  dataSelectors,
  paginationSelectors
} from '../../redux';

import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  getPagesTotalCount = (length, n) => Math.ceil(length / n);

  updateHistory = (value) => {
    const {push, pathname, search} = this.props;

    const searchParams = new URLSearchParams(search);

    searchParams.set('currentPage', value);
    push(`${pathname}?${searchParams.toString()}`);
  }

  handleClick = (event, type, value) => {
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

        this.updateHistory(prevPage);
        break;

      case 'dec':
        const decPage = upperPageBound - pageBound;

        shiftPaginationPageBoundsBack();

        updatePaginationCurrentPage({
          currentPage: decPage
        });

        this.updateHistory(decPage);
        break;

      case 'inc':
        const incPage = upperPageBound + 1;

        shiftPaginationPageBoundsForward();

        updatePaginationCurrentPage({ currentPage: incPage });

        this.updateHistory(incPage);
        break;

      case 'next':
        const nextPage = currentPage + 1;

        if (nextPage > upperPageBound) {
          shiftPaginationPageBoundsForward();
        }

        updatePaginationCurrentPage({ currentPage: nextPage });

        this.updateHistory(nextPage);
        break;

      default:
        updatePaginationCurrentPage({ currentPage: value });

        this.updateHistory(value);
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

const mapStateToProps = state => ({
  pagination: paginationSelectors.getPagination(state),
  list: dataSelectors.getFilteredData(state),
  pathname: state.router.location.pathname,
  search: state.router.location.search
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ ...paginationActions, push }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
