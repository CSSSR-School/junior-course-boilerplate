import { PureComponent } from 'react';
import propTypes from 'prop-types';

class Delayed extends PureComponent {
  state = { isVisible: true };

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  timer = () =>
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, this.props.showWhileTimeout);

  render() {
    return this.state.isVisible ? this.props.children : '';
  }
}

Delayed.propTypes = {
  showWhileTimeout: propTypes.number
};

export default Delayed;
