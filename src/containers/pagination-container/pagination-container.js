import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { productsActions } from '../../redux/modules/products';
import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  render() {
    return <Pagination {...this.props} />;
  }
}

const mapStateToProps = state => ({
  list: state.products.list,
  pagination: state.products.pagination
});
const {
  updatePaginationCurrentPage,
  makePaginationControlsActive,
  makePaginationControlsInactive,
  makePaginationControlPrevActive,
  makePaginationControlPrevInactive,
  makePaginationControlNextActive,
  makePaginationControlNextInactive,
  shiftPaginationPageBoundsBack,
  shiftPaginationPageBoundsForward
} = productsActions;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePaginationCurrentPage,
      makePaginationControlsActive,
      makePaginationControlsInactive,
      makePaginationControlPrevActive,
      makePaginationControlPrevInactive,
      makePaginationControlNextActive,
      makePaginationControlNextInactive,
      shiftPaginationPageBoundsBack,
      shiftPaginationPageBoundsForward
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
