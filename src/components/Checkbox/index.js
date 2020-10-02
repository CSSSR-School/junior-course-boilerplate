import React from 'react';

import PropTypes from 'prop-types';
import LogRender from '../LogRender';

import styles from './index.module.css';

class Checkbox extends LogRender {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    }
  }

  onChange = evt => {
    this.setState({
      checked: !this.state.checked
    })

    const changedCategory = evt.target.value;

    this.props.onChange && this.props.onChange(changedCategory);
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
        <label htmlFor={this.props.text}>
          <p className={styles.text}>{this.props.text}</p>
        </label>
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
