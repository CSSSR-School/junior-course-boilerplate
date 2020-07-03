import React from "react";
import styles from "./form.module.css";
import LogRender from "../logrender/log-render";
import InputNumber from "../input-number/input-number";

export default class Form extends LogRender {
  constructor(props) {
    super(props);

    this.state = {price: this.props.price};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updatePriceFilter() {
    this.props.updateData(this.state.price);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.updatePriceFilter();
  }

  handleChange(evt, value) {
    const name = evt.target.name;
    // const value = parseInt(evt.target.value);

    // this.setState(prevState => ({
    //
    //   price: {
    //     ...prevState.price,
    //     [name]: evt.target.value
    //   }
    // }));

    this.setState((prevState) => {
      return {
        price: {
          ...prevState.price,
          [name]: value
        }
      }
    })

    console.log(this.state);

    this.updatePriceFilter();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.form}>
        <h2>Цена</h2>
        <label>
          <span>от</span>
          <InputNumber
            value={this.state.price.min}
             name='min'
             handleChange={this.handleChange}
          />
        </label>
        <label>
          <span>до</span>
          <InputNumber
            value={this.state.price.max}
            name='max'
            handleChange={this.handleChange}
          />
        </label>
        <button type="submit">Применить</button>
      </form>
    );
  }
}
