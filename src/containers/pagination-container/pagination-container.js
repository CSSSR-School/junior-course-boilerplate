import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { paginationActions } from '../../redux';
import Pagination from '../../components/pagination';

class PaginationContainer extends PureComponent {
  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = ({ state }) => {
  const { currentPage } = state;
  this.props.updatePaginationCurrentPage({ currentPage });
  }

  render() {
    return <Pagination {...this.props} />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(paginationActions, dispatch);

export default connect(null, mapDispatchToProps)(PaginationContainer);
