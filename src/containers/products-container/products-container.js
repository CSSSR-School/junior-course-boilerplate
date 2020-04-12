import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Products from '../../components/products';

class ProductsContainer extends PureComponent {
  render() {
    return <Products {...this.props} />;
  }
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(ProductsContainer);
