import React from 'react';

import LogRender from '../LogRender';
import Input from '../Input';
import Checkbox from '../Checkbox';
import { FieldsContext } from '../../contex';

import styles from './index.module.css';

export default class Form extends LogRender {
  handlePriceChange = (evt, value) => {
    const name = evt.target.name;
    const isNewValue = value !== this.props.price[name];

    if (!isNewValue) {
      return;
    }

    const newValue = {};
    newValue.price = {
      ...this.props.price,
      [name]: value
    };

    this.props.updateData(newValue);
  }

  handleFilterChange = (evt) => {
    const filterName = evt.target.value;
    const currentFilterState = this.props.filters[filterName].checked;

    const newValue = {};
    newValue.filters = {
      ...this.props.filters,
      [filterName]: {
        ...this.props.filters[filterName],
        checked: !currentFilterState
      }
    }

    this.props.updateData(newValue);
  }

  renderFilters = (filters) => {
    const filtersValues = Object.values(filters);
    return filtersValues.map((filter, index) => (
        <Checkbox text={filter.name} onChange={this.handleFilterChange} checked={filter.checked} key={index} />
    ))
  }

  handleReset = (evt) => {
    evt.preventDefault();
    const filters = Object.assign({}, this.props.filters);

    const filtersName = Object.keys(filters);
    filtersName.forEach(name => filters[name].checked = false);

    const newValue = {};
    newValue.filters = filters;

    this.props.updateData(newValue);
  }


  render() {
    return (
      <FieldsContext.Consumer>
        {value => <form
          className={styles.form}>
          <h2>Цена</h2>
          <label className={`${styles.label} ${styles.price}`}>
            <span>от</span>
            <Input
              name="min"
              value={value.price.min}
              onChange={this.handlePriceChange}
            />
          </label>
          <label className={`${styles.label} ${styles.price}`}>
            <span>до</span>
            <Input
              name="max"
              value={value.price.max}
              onChange={this.handlePriceChange}
            />
          </label>
          <h2>Скидка</h2>
          <label className={styles.label}>
            <span>от</span>
            <Input
              name="sale"
              value={value.price.sale}
              onChange={this.handlePriceChange}
            />
            <span>%</span>
          </label>
          <h2>Категории</h2>
          <div className={styles.filters}>
            {this.renderFilters(value.filters)}
          </div>
          <button onClick={this.handleReset}>Сбросить фильтры</button>
        </form>
        }
      </FieldsContext.Consumer>
    );
  }
}
