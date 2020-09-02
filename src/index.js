import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import './index.css';
import store, { history } from './app/store';
import ProductPage from './app/routes/productPage/index';


class App extends React.Component {
    render() {
      return (
        <Provider store={ store }>
          <ConnectedRouter history={ history }>
            <Redirect from="/" to="/list/1"/>
            <Route path="/list/:pageId" component={ ProductPage }/>
          </ConnectedRouter>
        </Provider>
      )
    }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
