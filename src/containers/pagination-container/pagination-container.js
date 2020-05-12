import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  paginationSelectors,
  routerSelectors
} from '../../redux';
import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  componentDidMount() {
    const { push, currentPage } = this.props;

    push(this.updateSearchWithCurrentPage(currentPage));
  }

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

  updateSearchWithCurrentPage = currentPage => {
    const { search, pagesLength } = this.props;

    const searchParams = new URLSearchParams(search);

    if (currentPage > pagesLength) {
      searchParams.set('currentPage', 1);
    } else {
      searchParams.set('currentPage', currentPage);
    }

    return {
      search: searchParams.toString()
    };
  };

  render() {
    const { pagination, currentPage, pagesLength } = this.props;

    const { pageBound } = pagination;

    return (
      <Pagination
        pageBound={pageBound}
        currentPage={currentPage}
        pagesRange={this.getPagesRange(currentPage, pageBound)}
        pagesLength={pagesLength}
        updateSearchWithCurrentPage={this.updateSearchWithCurrentPage}
      />
    );
  }
}

const mapStateToProps = state => ({
  pagination: paginationSelectors.getPagination(state),
  pagesLength: paginationSelectors.getPagesTotalCount(state),
  currentPage: routerSelectors.getRouterSearchCurrentPage(state),
  search: routerSelectors.getRouterSearch(state)
});

export default connect(mapStateToProps, { push })(PaginationContainer);
