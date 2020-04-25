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
  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);

    const {
      pagination: { currentPage }
    } = this.props;

    window.history.replaceState(
      { ...window.history.state, currentPage },
      'params',
      `?currentPage=${currentPage}`
    );
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = ({ state }) => {
    const { currentPage } = state;

    this.props.updatePaginationCurrentPage({ currentPage });
  };

  updateHistoryState = (params, value) => {
    params.set('currentPage', value);

    window.history.pushState(
      { ...window.history.state, currentPage: value },
      'pagination',
      `?${params.toString()}`
    );
  };

  getPagesTotalCount = (length, n) => Math.ceil(length / n);

  handleClick = (event, type) => {
    event.preventDefault();

    const {
      pagination: { currentPage, upperPageBound, pageBound },
      shiftPaginationPageBoundsBack,
      shiftPaginationPageBoundsForward,
      updatePaginationCurrentPage
    } = this.props;

    const searchParams = new URLSearchParams(window.location.search);

    switch (type) {
      case 'prev':
        const prevPage = currentPage - 1;

        if (prevPage % pageBound === 0) {
          shiftPaginationPageBoundsBack();
        }

        updatePaginationCurrentPage({ currentPage: prevPage });
        this.updateHistoryState(searchParams, prevPage);
        break;
      case 'dec':
        const decPage = upperPageBound - pageBound;

        shiftPaginationPageBoundsBack();
        updatePaginationCurrentPage({
          currentPage: decPage
        });
        this.updateHistoryState(searchParams, decPage);
        break;
      case 'inc':
        const incPage = upperPageBound + 1;

        shiftPaginationPageBoundsForward();
        updatePaginationCurrentPage({ currentPage: upperPageBound + 1 });
        this.updateHistoryState(searchParams, incPage);
        break;
      case 'next':
        const nextPage = currentPage + 1;

        if (nextPage > upperPageBound) {
          shiftPaginationPageBoundsForward();
        }
        updatePaginationCurrentPage({ currentPage: nextPage });
        this.updateHistoryState(searchParams, nextPage);
        break;
      default:
        const {
          target: { textContent }
        } = event;
        const value = Number(textContent);

        updatePaginationCurrentPage({ currentPage: value });
        this.updateHistoryState(searchParams, value);
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
