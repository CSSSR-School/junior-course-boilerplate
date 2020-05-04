import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dataActions, dataSelectors } from '../../redux/';
import App from '../../components/app';

class AppContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <App data={this.props.data} />;
  }
}

const mapStateToProps = state => {
  return {
    data: dataSelectors.getData(state),
  };
};

const mapDispatchToProps = dispatch => {
  const { fetchData } = bindActionCreators(dataActions, dispatch);

  return { fetchData };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
