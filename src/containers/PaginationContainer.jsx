import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import pt from 'prop-types';
import {getTotalPages} from '../state/modules/pagination';
import {getPage, getSearch} from '../state/modules/router';
import LogRender from '../components/LogRender/LogRender';
import Pagination from '../components/Pagination/Pagination.jsx';

const INITIAL_PAGE = 1;
const MIN_PAGES_COUNT = 5;
const MIDDLE_PAGES_COUNT = 3;
const END_PAGES_COUNT = 2;

class PaginationContainer extends LogRender {

  componentDidUpdate(prevProps) {
    if (prevProps.totalPages !== this.props.totalPages) {
      this.changePageHandler(INITIAL_PAGE);
    }
  }

  changePageHandler = (page) => {
    const {search, history: {push}} = this.props;
    const searchParams = new URLSearchParams(search);

    searchParams.set('page', page);
    push(`?${searchParams.toString()}`);
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
    );
  }
}

PaginationContainer.propTypes = {
  page: pt.number.isRequired,
  search: pt.string.isRequired,
  totalPages: pt.number.isRequired
};

const mapStateToProps = (state) => ({
  totalPages: getTotalPages(state),
  search: getSearch(state),
  page: getPage(state)
});

export default connect(mapStateToProps)(withRouter(PaginationContainer));
