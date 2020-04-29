import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  dataSelectors,
  paginationSelectors,
  routerSelectors
} from '../../redux';
import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  getPagesTotalCount = (length, n) => Math.ceil(length / n);

  getPagesRange = (currentPage, pageBound) => {
    let counter;

    if (currentPage <= pageBound) {
      counter = 0;
    } else if (currentPage > pageBound && currentPage % pageBound === 0) {
      counter = Math.trunc(currentPage / pageBound) - 1;
    } else {
      counter = Math.trunc(currentPage / pageBound);
    }

    let lowerPageBound = 0;

    let upperPageBound = pageBound;

    while (counter) {
      lowerPageBound += pageBound;
      upperPageBound += pageBound;
      counter -= 1;
    }

    return { lowerPageBound, upperPageBound };
  };

  getPaginationSearchLink = currentPage => {
    const { search } = this.props;

    const searchParams = new URLSearchParams(search);

    searchParams.set('currentPage', currentPage);

    return {
      search: searchParams.toString()
    };
  };

  render() {
    const { pagination, search, list } = this.props;

    const { itemsPerPage, pageBound } = pagination;

    const searchParams = new URLSearchParams(search);

    const currentPage = searchParams.has('currentPage')
      ? searchParams.get('currentPage')
      : pagination.currentPage;

    return (
      <Pagination
        pageBound={pageBound}
        currentPage={Number(currentPage)}
        pagesRange={this.getPagesRange(currentPage, pageBound)}
        pagesLength={this.getPagesTotalCount(list.length, itemsPerPage)}
        getPaginationSearchLink={this.getPaginationSearchLink}
      />
    );
  }
}

const mapStateToProps = state => ({
  pagination: paginationSelectors.getPagination(state),
  list: dataSelectors.getFilteredData(state),
  search: routerSelectors.getRouterSearch(state)
});

export default connect(mapStateToProps)(PaginationContainer);
