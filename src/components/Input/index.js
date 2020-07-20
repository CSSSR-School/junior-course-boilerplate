import React from 'react';
import propTypes from 'prop-types';

import LogRender from '../LogRender';
import WithNumberMask from '../WithNumberMask';

import styles from './index.module.css';

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
  value: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default WithNumberMask(Input);
