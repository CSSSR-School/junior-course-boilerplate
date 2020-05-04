import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { paginationSelectors } from '../../redux/';
import List from '../../components/list';

class ListContainer extends PureComponent {
  render() {
    const { items } = this.props;

    return <List list={items} />;
  }
}

const mapStateToProps = state => {
  return {
    items: paginationSelectors.getVisibleProductsList(state)
  };
};

export default connect(mapStateToProps)(ListContainer);
