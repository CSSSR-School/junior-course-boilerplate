import React from 'react';
import Button from '../Button';
import BaseComponent from '../BaseComponent/BaseComponent';
import styles from './Filters.module.sass';

class Filters extends BaseComponent {
  constructor(props) {
    super(props);
    this.minPriceInput = React.createRef();
    this.maxPriceInput = React.createRef();
  }

  // "А если введены не положительные числа, просто будем считать,
  // что фильтр не задан и считаем, что это 0."
  // По-моему это не юзер фредли. Лучше уж просто сбрасывать до
  // дефолтного значения.
  normalizeInputValue = input => {
    if (input.value < 0) {
      const inputName = input.name;
      input.value = this.props[inputName];
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { filterProducts } = this.props;

    [this.minPriceInput.current, this.maxPriceInput.current].forEach(
      this.normalizeInputValue
    );

    filterProducts(
      this.minPriceInput.current.value,
      this.maxPriceInput.current.value
    );
  };

  render() {
    const { minProductPrice, maxProductPrice } = this.props;
    return (
      <article className={styles.Filters}>
        <form onSubmit={this.handleSubmit}>
          <fieldset className={styles.FiltersFieldset}>
            <legend className={styles.FiltersHeader}>Цена</legend>
            <div className={styles.FiltersPrice}>
              <div className={styles.FiltersInputWrapper}>
                <label className={styles.FiltersLabel} htmlFor="minPrice">
                  от
                </label>
                <input
                  className={styles.FiltersInput}
                  type="number"
                  name="minProductPrice"
                  id="minPrice"
                  placeholder={0}
                  defaultValue={minProductPrice}
                  ref={this.minPriceInput}
                />
              </div>
              <div className={styles.FiltersInputWrapper}>
                <label className={styles.FiltersLabel} htmlFor="maxPrice">
                  до
                </label>
                <input
                  className={styles.FiltersInput}
                  type="number"
                  name="maxProductPrice"
                  id="maxPrice"
                  placeholder={3000}
                  defaultValue={maxProductPrice}
                  ref={this.maxPriceInput}
                />
              </div>
            </div>
            <Button>Применить</Button>
          </fieldset>
        </form>
      </article>
    );
  }
}

export default Filters;
