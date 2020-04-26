import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { paginationSelectors } from '../../redux/modules/pagination';
import List from '../../components/list';

const { getVisibleProductsList } = paginationSelectors;

class ListContainer extends PureComponent {
  render() {
    const { list, push } = this.props;
    return <List list={list} handleClick={id => push(`/product/${id}`)} />;
  }
}

const mapStateToProps = state => ({
  list: getVisibleProductsList(state)
});

export default connect(mapStateToProps, { push })(ListContainer);
