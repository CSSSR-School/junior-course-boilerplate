import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Filter from '../../components/filter';
import { productsActions } from '../../redux';
import { productsSelectors } from '../../redux/modules/products';

class FilterContainer extends PureComponent {
  componentDidMount() {
    const {
      filter: { categories }
    } = this.props;

    window.history.pushState(
      { ...window.history.state, categories },
      'params',
    );
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  // componentDidUpdate() {
  //   const {
  //     filter: { categories }
  //   } = this.props;

    // const searchParams = new URLSearchParams(window.location.search);
    // searchParams.delete('category');

    // Object.keys(categories).forEach(category => {
    //   if (categories[category].isActive) {
    //     searchParams.append('category', category);
    //   }
    // });

    // window.history.pushState(
    //   { ...window.history.state, categories },
    //   'params',
    //   `?${searchParams.toString()}`
    // );
  // }

  handlePopState = ({ state }) => {
    if (state.hasOwnProperty('categories')) {
      const { categories } = state;
      this.props.updateFilterCategories({ categories });
    }
  };
  render() {
    const { filter, updateFilterField, resetState } = this.props;
    return (
      <Filter
        filter={filter}
        updateFilterField={updateFilterField}
        resetState={resetState}
      />
    );
  }
}

const { getProductsFilter } = productsSelectors;

const mapStateToProps = state => ({
  filter: getProductsFilter(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(productsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
