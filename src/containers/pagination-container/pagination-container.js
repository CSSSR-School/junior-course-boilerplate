import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { paginationActions } from '../../redux/modules/products';
import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  render() {
    return <Pagination {...this.props} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(paginationActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(PaginationContainer);
