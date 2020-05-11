import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productsActions } from '../../redux/';
import App from '../../components/app';
import { withApi } from '../../components/hoc-helpers';

class AppContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts(`${this.props.apiBase}products`);
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  const { fetchProducts } = bindActionCreators(productsActions, dispatch);

  return { fetchProducts };
};

export default connect(null, mapDispatchToProps)(withApi(AppContainer));
