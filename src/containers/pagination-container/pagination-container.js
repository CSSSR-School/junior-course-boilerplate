import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
  productsSelectors,
  paginationSelectors,
  routerSelectors
} from '../../redux';
import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  componentDidMount() {
    const { push, currentPage } = this.props;

    push(this.updateSearchWithCurrentPage(currentPage));
  }
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

  updateSearchWithCurrentPage = currentPage => {
    const { search } = this.props;

    const searchParams = new URLSearchParams(search);

    searchParams.set('currentPage', currentPage);

    return {
      search: searchParams.toString()
    };
  };

  render() {
    const { pagination, currentPage, list } = this.props;

    const { itemsPerPage, pageBound } = pagination;

    return (
      <Pagination
        pageBound={pageBound}
        currentPage={currentPage}
        pagesRange={this.getPagesRange(currentPage, pageBound)}
        pagesLength={this.getPagesTotalCount(list.length, itemsPerPage)}
        updateSearchWithCurrentPage={this.updateSearchWithCurrentPage}
      />
    );
  }
}

const mapStateToProps = state => ({
  pagination: paginationSelectors.getPagination(state),
  list: productsSelectors.getFilteredProducts(state),
  currentPage: routerSelectors.getRouterSearchCurrentPage(state),
  search: routerSelectors.getRouterSearch(state),
});

export default connect(mapStateToProps, { push })(PaginationContainer);
