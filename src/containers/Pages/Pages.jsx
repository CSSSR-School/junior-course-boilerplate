import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/LogRender/LogRender';
import Pages from '../../components/Pages/Pages';

import { setCurrentPageAction } from '../../store/app'
import { productsAndPagesSelector } from '../../store/store';

class PagesContainer extends LogRender {
  render() {
    return (
      <Pages { ...this.props }/>
    )
  }
}

const mapStateToProps = (state) => ({
  pagesCount: productsAndPagesSelector(state).pagesCount,
  currentPage: productsAndPagesSelector(state).currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  goToPage: (value) => dispatch(setCurrentPageAction(value)),
});



export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer);
