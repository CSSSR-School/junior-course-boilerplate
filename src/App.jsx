import React, {Component} from 'react';
import pt from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './history';
import {
  fetchProducts,
  getError,
  getLoading
} from './state/modules/product';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import NotFound from './pages/NotFound.jsx';
import Loader from './components/Loader/Loader.jsx';
import Error from './components/Error/Error.jsx';

class App extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render () {
    const {loading, error} = this.props;

    if (loading) {
      return <Loader/>;
    }

    if (error) {
      return <Error error={error}/>;
    }

    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products/:prodID' component={Product}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  loading: pt.bool.isRequired,
  error: pt.oneOfType([pt.string.isRequired, pt.oneOf([null]).isRequired]),
  fetchProducts: pt.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state)
});

export default connect(mapStateToProps, {fetchProducts})(App);
