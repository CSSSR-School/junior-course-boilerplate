import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { paginationSelectors } from '../../redux';
import List from '../../components/list';

const {
  getVisibleProductsList,
} = paginationSelectors;

class ListContainer extends PureComponent {
  render() {
    const {list} = this.props;

    return <List list={list} />;
  }
}

const mapStateToProps = state => ({
  list: getVisibleProductsList(state),
});

export default connect(mapStateToProps)(ListContainer);
