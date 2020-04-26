import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/store';

import App from './components/app';
import WebFont from 'webfontloader';

import 'normalize.scss/normalize.scss';
import './index.scss';

const store = configureStore();

WebFont.load({
  google: {
    families: ['Open Sans:300,600', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
