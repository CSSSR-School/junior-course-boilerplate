import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './app/store';
import ProductPage from './app/routes/productPage/index';

class App extends React.Component {
    render() {
      return (
        <ProductPage />
      )
    }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
