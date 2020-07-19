import React from 'react';
import pt from 'prop-types';
import styles from './index.module.css';
import LogRender from '../LogRender';
import WithNumberMask from '../WithNumberMask';

class Input extends LogRender {
  render() {
    return (
      <input
        className={styles.input}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange} />
        );
    }
}

Input.propTypes = {
  value: pt.number.isRequired,
  onChange: pt.func.isRequired,
  name: pt.string.isRequired,
  title: pt.string.isRequired
};

export default WithNumberMask(Input);
