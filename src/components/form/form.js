import React from "react";
import styles from "./form.module.css";
import LogRender from "../logrender/log-render";
import InputNumber from "../input-number/input-number";
import InputDiscount from "../discount/discount";

export default class Form extends LogRender {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  updatePriceFilter(data) {
    this.props.updateData(data);
  }

  handleChange(evt, value) {
    const name = evt.target.name;

    this.updatePriceFilter({
        ...this.props.price,
        [name]: value
    })
  }

  render() {
    return (
      <form
        className={styles.form}>
        <h2>Цена</h2>
        <label>
          <span>от</span>
          <InputNumber
            value={this.props.price.min}
            name='min'
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span>до</span>
          <InputNumber
            value={this.props.price.max}
            name='max'
            onChange={this.handleChange}
          />
        </label>
        <InputDiscount title="Скидка" name="sale" value={this.props.price.sale} onChange={this.handleChange} />
      </form>
    );
  }
}
