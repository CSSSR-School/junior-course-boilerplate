import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Title from './components/Title'
import Sidebar from './containers/sidebar';
import List from './containers/list';
import store from './store';
import { getUrlVars } from './utils';

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

class App extends React.Component {
  componentDidMount = () => {
    const searchParams = window.location.search;

    if (searchParams && searchParams.includes('?categories=')) {
      const url = getUrlVars();
      const checkedCategories = url['categories'].split(',');

      store.dispatch({ type:'UPDATE_CHECKED_CATEGORIES', payload: { checkedCategories }})
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

    const currentCheckedCategories = store.checkedCategories;
    const isStatesEqual = isCategoryFiltersEqual(historyCategories, currentCheckedCategories);

    if (!isStatesEqual) {
      this.addCheckedCategoriesUrl(currentCheckedCategories);
    }
  }

  addCheckedCategoriesUrl = (checkedCategories) => {
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
      store.dispatch({ type: 'RESET_FILTER' });
      return;
    }

    store.dispatch({ type:'UPDATE_CHECKED_CATEGORIES', payload: { checkedCategories: checkedCategories.split(',') }})
  }

  render() {
    return (
      <Provider store={store}>
        <div className='appWrapper'>
          <Title text='Список товаров'/>
          <div className='wrapper'>
            <Sidebar />
            <List />
          </div>
        </div>
      </Provider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App />, rootElement);
