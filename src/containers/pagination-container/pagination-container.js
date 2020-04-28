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
  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = () => {
    const searchParams = new URLSearchParams(this.props.search);

    const currentPage =
      Number(searchParams.get('currentPage')) || 1;

    this.props.updatePaginationCurrentPage({ currentPage });
  };

  getPagesTotalCount = (length, n) => Math.ceil(length / n);

  updateHistory = (params, value) => {
    const { pathname, push } = this.props;

    params.set('currentPage', value);
    push(`${pathname}?${params.toString()}`);
  };

  handleClick = (event, type) => {
    event.preventDefault();

    const {
      pagination: { currentPage, upperPageBound, pageBound },
      search,
      shiftPaginationPageBoundsBack,
      shiftPaginationPageBoundsForward,
      updatePaginationCurrentPage
    } = this.props;

    const searchParams = new URLSearchParams(
      search.length === 0 ? `currentPage=${currentPage}` : search
    );

    switch (type) {
      case 'prev':
        const prevPage = currentPage - 1;

        if (prevPage % pageBound === 0) {
          shiftPaginationPageBoundsBack();
        }

        updatePaginationCurrentPage({ currentPage: prevPage });
        this.updateHistory(searchParams, prevPage);
        break;
      case 'dec':
        const decPage = upperPageBound - pageBound;

        shiftPaginationPageBoundsBack();
        updatePaginationCurrentPage({
          currentPage: decPage
        });
        this.updateHistory(searchParams, decPage);
        break;
      case 'inc':
        const incPage = upperPageBound + 1;

        shiftPaginationPageBoundsForward();
        updatePaginationCurrentPage({ currentPage: incPage });
        this.updateHistory(searchParams, incPage);
        break;
      case 'next':
        const nextPage = currentPage + 1;

        if (nextPage > upperPageBound) {
          shiftPaginationPageBoundsForward();
        }

        updatePaginationCurrentPage({ currentPage: nextPage });
        this.updateHistory(searchParams, nextPage);
        break;
      default:
        const {
          target: { textContent }
        } = event;

        const value = Number(textContent);

        updatePaginationCurrentPage({ currentPage: value });
        this.updateHistory(searchParams, value);
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
  list: getFilteredData(state),
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
