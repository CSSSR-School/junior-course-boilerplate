import React from 'react';

import LogRender from '../LogRender';
import Input from '../Input';
import Checkbox from '../Checkbox';
import { FieldsContext } from '../../context';

import styles from './index.module.css';

export default class Form extends LogRender {
  renderCategoriesFilters = (categories) => {
    const categoriesValues = Object.values(categories);
    return categoriesValues.map((category, index) => (
        <Checkbox text={category.name} onChange={this.props.handleCategoryChange} checked={category.checked} key={index} />
    ))
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
              onChange={this.props.handlePriceChange}
            />
          </label>
          <label className={`${styles.label} ${styles.price}`}>
            <span>до</span>
            <Input
              name="max"
              value={value.price.max}
              onChange={this.props.handlePriceChange}
            />
          </label>
          <h2>Скидка</h2>
          <label className={styles.label}>
            <span>от</span>
            <Input
              name="sale"
              value={value.price.sale}
              onChange={this.props.handlePriceChange}
            />
            <span>%</span>
          </label>
          <h2>Категории</h2>
          <div className={styles.filters}>
            {this.renderCategoriesFilters(value.categories)}
          </div>
          <button onClick={this.props.handleReset}>Сбросить фильтры</button>
        </form>
        }
      </FieldsContext.Consumer>
    );
  }
}
