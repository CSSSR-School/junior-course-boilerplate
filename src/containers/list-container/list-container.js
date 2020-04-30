import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { paginationSelectors } from '../../redux/modules/pagination';
import List from '../../components/list';

class ListContainer extends PureComponent {
  render() {
    const { list } = this.props;

    return <List list={list} />;
  }
}

const mapStateToProps = state => {
  return {
    list: paginationSelectors.getVisibleProductsList(state)
  };
};

export default connect(mapStateToProps)(ListContainer);
