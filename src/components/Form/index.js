import React from 'react';

import LogRender from '../LogRender';
import Input from '../Input';
import Checkbox from '../Checkbox';

import styles from './index.module.css';

export default class Form extends LogRender {
  updatePriceFilter = (data) => {
    this.props.updateData(data);
  }

  handlePriceChange = (evt, value) => {
    const name = evt.target.name;
    const isNewValue = value !== this.props.price[name];

    if (!isNewValue) {
      return;
    }

    console.log(value);

    this.updatePriceFilter({
      ...this.props.price,
      [name]: value
    })
  }

  handleFilterChange = (evt) => {
    const value = evt.target.value;
    const currentFilterState = this.props.filters[value];
  }

  renderFilters = () => {
    const filters = Object.values(this.props.filters);
    return filters.map((filter, index) => (
      <Checkbox text={filter.name} onChange={this.handleFilterChange} checked={filter.checked} key={index}/>
    ))
  }


  render() {
    return (
      <form
        className={styles.form}>
        <h2>Цена</h2>
        <label className={`${styles.label} ${styles.price}`}>
          <span>от</span>
          <Input
            name="min"
            value={this.props.price.min}
            onChange={this.handlePriceChange}
          />
        </label>
        <label className={`${styles.label} ${styles.price}`}>
          <span>до</span>
          <Input
            name="max"
            value={this.props.price.max}
            onChange={this.handlePriceChange}
          />
        </label>
        <h2>Скидка</h2>
        <label className={styles.label}>
          <span>от</span>
          <Input
            name="sale"
            value={this.props.price.sale}
            onChange={this.handlePriceChange}
          />
          <span>%</span>
        </label>
        <h2>Категории</h2>
        <div className={styles.filters}>
          {this.renderFilters()}
        </div>
        <button>Сбросить фильтры</button>
      </form>
    );
  }
}
