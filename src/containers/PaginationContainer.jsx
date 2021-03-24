import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {
  changePage,
  resetPagination,
  getTotalPages,
  getPage
} from '../state/modules/pagination';
import {pushState, getQuery} from '../state/modules/routing'
import LogRender from '../components/LogRender/LogRender';
import Pagination from '../components/Pagination/Pagination.jsx';

const MIN_PAGES_COUNT = 5;
const MIDDLE_PAGES_COUNT = 3;
const END_PAGES_COUNT = 2;

class PaginationContainer extends LogRender {

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
    window.history.replaceState(null, null, this.props.query);
    this.setFromHistory();
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate(prevProps) {

    if (prevProps.totalPages !== this.props.totalPages) {
      this.props.resetPagination();
    }

    if (prevProps.page !== this.props.page) {
      this.updateHistory(this.props.page);
    }
  }

  setFromHistory = () => {
    const {totalPages, query, changePage} = this.props;
    const searchParams = new URLSearchParams(query);
    const page = searchParams.has('page') ? Number(searchParams.get('page')) : 1;
    changePage(page <= totalPages && page > 0 ? page : 1);
  }

  updateHistory = (page) => {
    const {query, pushState} = this.props;
    const searchParams = new URLSearchParams(query);

    searchParams.set('page', page);
    pushState(`?${searchParams.toString()}`);
  }

  changePageHandler = (page) => {
    const {changePage} = this.props;
    changePage(page);
    this.updateHistory(page);
  }

  render() {
    const {
      totalPages,
      page
    } = this.props;

    return (
      <>
        {
          totalPages > 0 &&
          <Pagination
            page={page}
            totalPages={totalPages}
            minPagesCount={MIN_PAGES_COUNT}
            middlePagesCount={MIDDLE_PAGES_COUNT}
            endPagesCount={END_PAGES_COUNT}
            onChangePage={this.changePageHandler}
          />
        }
      </>
    )
  }
}

PaginationContainer.propTypes = {
  page: pt.number.isRequired,
  query: pt.string.isRequired,
  totalPages: pt.number.isRequired,
  changePage: pt.func.isRequired,
  resetPagination: pt.func.isRequired,
  pushState: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  totalPages: getTotalPages(state),
  page: getPage(state),
  query: getQuery(state)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetPagination,
      changePage,
      pushState
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
