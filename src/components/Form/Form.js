import React from "react";
import styles from "./Form.module.css";
import LogRender from "../LogRender/LogRender";

export default class Form extends LogRender {
  constructor(props) {
    super(props);

    this.minPriceInput = React.createRef();
    this.maxPriceInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateData({
      min: this.minPriceInput.current.value,
      max: this.maxPriceInput.current.value
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.form}>
        <h2>Цена</h2>
        <label>
          <span>от</span>
          <input
            type="number"
            defaultValue={this.props.price.min}
            ref={this.minPriceInput}/>
        </label>
        <label>
          <span>до</span>
          <input
            type="number"
            defaultValue={this.props.price.max}
            ref={this.maxPriceInput}/>
        </label>
        <button type="submit">Применить</button>
      </form>
    );
  }
}
