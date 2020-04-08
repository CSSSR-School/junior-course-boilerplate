import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './components/app';
import WebFont from 'webfontloader';

import 'normalize.scss/normalize.scss';
import './index.scss';

WebFont.load({
  google: {
    families: ['Open Sans:300,600', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
