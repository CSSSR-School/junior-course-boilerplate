import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { productsSelectors } from '../../redux/modules/products';
import { paginationSelectors } from '../../redux/modules/pagination';

import { paginationActions } from '../../redux';

import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  render() {
    const {
      pagination,
      list,
      updatePaginationCurrentPage,
      shiftPaginationPageBoundsBack,
      shiftPaginationPageBoundsForward
    } = this.props;
    return (
      <Pagination
        pagination={pagination}
        list={list}
        updatePaginationCurrentPage={updatePaginationCurrentPage}
        shiftPaginationPageBoundsBack={shiftPaginationPageBoundsBack}
        shiftPaginationPageBoundsForward={shiftPaginationPageBoundsForward}
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
