import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './history';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import NotFound from './pages/NotFound.jsx';

class App extends Component {

  render () {
    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products/:prodID' component={Product} />
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </ConnectedRouter>
    );
  }
}

export default App;
