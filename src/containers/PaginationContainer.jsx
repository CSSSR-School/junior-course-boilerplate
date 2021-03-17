import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {PropValidator} from '../prop-validator';
import {changePage} from '../reducers/rootReducer';
import {getFilteredProducts, getPage} from '../selectors/selectors';
import LogRender from '../components/LogRender/LogRender';
import Pagination from '../components/Pagination/Pagination.jsx';

class PaginationContainer extends LogRender {

  componentDidUpdate(prevProps) {
    if (prevProps.filteredProductsList.length !== this.props.filteredProductsList.length) {
      this.props.changePage(1);
    }
  }

  render() {
    const {
      filteredProductsList,
      page,
      changePage
    } = this.props;

    return (
      <>
        {
          filteredProductsList.length > 0 &&
          <Pagination
            page={page}
            totalProducts={filteredProductsList.length}
            onChangePage={changePage}
          />
        }
      </>
    )
  }
}

PaginationContainer.propTypes = {
  page: pt.number.isRequired,
  filteredProductsList: pt.arrayOf(PropValidator.PRODUCT_INFO).isRequired,
  changePage: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  filteredProductsList: getFilteredProducts(state),
  page: getPage(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changePage}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
