import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { productsSelectors } from '../../redux/modules/products';
import { paginationSelectors } from '../../redux/modules/pagination';

import { paginationActions } from '../../redux';

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
        shiftPaginationPageBoundsBack();
        updatePaginationCurrentPage({
          currentPage: upperPageBound - pageBound
        });
        break;
      case 'current':
        const {
          target: { textContent }
        } = event;
        const value = Number(textContent);
        updatePaginationCurrentPage({ currentPage: value });
        break;
      case 'inc':
        shiftPaginationPageBoundsForward();
        updatePaginationCurrentPage({ currentPage: upperPageBound + 1 });
        break;
      case 'next':
        const nextPage = currentPage + 1;

        if (nextPage > upperPageBound) {
          shiftPaginationPageBoundsForward();
        }
        updatePaginationCurrentPage({ currentPage: nextPage });
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
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

const { getFilteredProductsList } = productsSelectors;

const { getPagination } = paginationSelectors;

const mapStateToProps = state => ({
  pagination: getPagination(state),
  list: getFilteredProductsList(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(paginationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
