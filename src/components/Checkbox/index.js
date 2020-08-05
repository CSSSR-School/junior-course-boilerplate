import React from 'react';

import PropTypes from 'prop-types';
import LogRender from '../LogRender';
import { makeUcFirst } from '../../utils'

import styles from './index.module.css';

class Checkbox extends LogRender {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    }
  }

  onChange = (evt) => {
    this.setState({
      checked: !this.state.checked
    })

    this.props.onChange && this.props.onChange(evt);
  }

  render() {
    return(
      <div className={`${styles.checkbox} ${this.props.checked ? styles.checked : ''}`}>
        <input
          type='checkbox'
          id={this.props.text}
          name="filter"
          value={this.props.text}
          checked={this.state.checked}
          onChange={this.onChange}
        />
        <label htmlFor={this.props.text}>{makeUcFirst(this.props.text)}</label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Checkbox;
