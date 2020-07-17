import React from 'react';
import styles from './index.module.css';
import LogRender from '../LogRender';
import Input from '../Input';

export default class Form extends LogRender {
  updatePriceFilter = (data) => {
    this.props.updateData(data);
  }

  handleChange = (evt, value) => {
    const name = evt.target.name;
    const isNewValue = value !== this.props.price[name];

    if (!isNewValue) {
      return;
    }

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
        <label className={styles.form__price}>
          <span>от</span>
          <Input
            name='min'
            value={this.props.price.min}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.form__price}>
          <span>до</span>
          <Input
            name='max'
            value={this.props.price.max}
            onChange={this.handleChange}
          />
        </label>
        <h2>Скидка</h2>
        <label>
          <span>от</span>
          <Input
            name="sale"
            value={this.props.price.sale}
            onChange={this.handleChange}
          />
          <span>%</span>
        </label>
      </form>
    );
  }
}
