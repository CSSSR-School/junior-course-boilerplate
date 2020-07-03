import React from "react";

import LogRender from "../logrender/log-render";
import styles from "./input.module.css";

export default class InputNumber extends LogRender {

  handleChange = (evt) => {
    if (isNaN(parseInt(evt.target.value))) {
      return;
    }
    const inputValue = parseInt(evt.target.value.replace(/\D+/g, ''));
    // this.setState({ value: evt.target.value.replace(/\D+/g, '') });
    this.props.handleChange && this.props.handleChange(evt, inputValue);
  }

  render() {
    return (
      <input
        className={styles.number}
        type='text'
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}
