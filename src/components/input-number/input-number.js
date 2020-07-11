import React from "react";

import LogRender from "../logrender/log-render";
import styles from "./input.module.css";
import toInt from "csssr-school-utils/lib/toInt";

export default class InputNumber extends LogRender {

  handleChange = (evt) => {
    const inputValue = toInt(evt.target.value);

    this.setState({ value:  inputValue});
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
