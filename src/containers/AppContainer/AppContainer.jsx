import React from 'react';
import { connect } from 'react-redux';

import LogRender from '../../components/App/App';
import App from '../../components/App/App';

import { categorySelector } from '../../store/filters';
import { productsAndPagesSelector } from '../../store/store';

class CategoryFieldsetContainer extends LogRender {
  render() {
    return (
      <App
        category={ this.props.category }
        currentPage={ this.props.currentPage }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  category: categorySelector(state),
  currentPage: productsAndPagesSelector(state).currentPage,
});

export default connect(mapStateToProps)(CategoryFieldsetContainer);
