import React from "react";

import LogRender from "../logrender/log-render";
import styles from "./input.module.css";
import withMask from "../with-mask/with-mask";

class InputNumberUI extends LogRender {
  render() {
    return (
      <input
        className={styles.number}
        type='text'
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    )
  }
}

const InputNumber = withMask(InputNumberUI);

export default InputNumber;
