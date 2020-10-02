import React from 'react';
import Title from '../Title'
import Sidebar from '../../containers/sidebar';
import List from '../../containers/list';
import { getUrlVars } from '../../utils';

import './index.css'

export const PAGE_TITLE = 'Интернет магазин'
export const DEFAULT_URL = window.location.pathname;

const isCategoryFiltersEqual = (prevFilters, curFilters) => {
  if (prevFilters.length !== curFilters.length) {
    return false;
  }

  let result = true;

  prevFilters.forEach(item => {
    if (!curFilters.includes(item)) {
      result = false;
    }
  })

  return result;
}

class App extends React.PureComponent {
  componentDidMount = () => {
    const searchParams = window.location.search;

    if (searchParams && searchParams.includes('?categories=')) {
      const url = getUrlVars();
      const checkedCategories = url['categories'].split(',');

      this.props.updateCheckedCategories(checkedCategories);
    } else {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
    }

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate = () => {
    let historyCategories = [];

    if (window.history.state) {
      historyCategories = window.history.state.split(',');
    }

    const currentCheckedCategories = this.props.checkedCategories;
    const isStatesEqual = isCategoryFiltersEqual(historyCategories, currentCheckedCategories);

    if (!isStatesEqual) {
      this.addCheckedCategoriesUrl(currentCheckedCategories);
    }
  }

  addCheckedCategoriesUrl = checkedCategories => {
    if (checkedCategories.length === 0) {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
      return;
    }

    const categoriesURl = `?categories=${checkedCategories.join()}`;
    window.history.pushState(checkedCategories.join(), PAGE_TITLE, categoriesURl)
  }

  setFromHistory = evt => {
    const checkedCategories = evt.state;

    if (checkedCategories === DEFAULT_URL) {
      this.props.resetFilters();
      return;
    }

    this.props.updateCheckedCategories(checkedCategories.split(','))
  }

  render() {
    return (
      <div className='appWrapper'>
        <Title text='Список товаров'/>
        <div className='wrapper'>
          <Sidebar />
          <List />
        </div>
      </div>
    )
  }
}

export default App;
