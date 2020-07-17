import React from 'react';
import styles from './index.module.css';
import LogRender from '../LogRender';
import Input from '../Input';

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
            value={this.props.price.min}
            name='min'
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.form__price}>
          <span>до</span>
          <Input
            value={this.props.price.max}
            name='max'
            onChange={this.handleChange}
          />
        </label>
        <h2>Скидка</h2>
        <label>
          <span>от</span>
          <Input
            title="Скидка"
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
