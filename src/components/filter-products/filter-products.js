import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProducts from '../input-filter-products';
import Discount from 'csssr-school-input-discount';
import LogRender from '../log-render';

class FilterProducts extends LogRender {
  state = {
    range: {
      min: {
        value: this.props.filter.min,
        isValid: true
      },
      max: {
        value: this.props.filter.max,
        isValid: true
      }
    },
    discount: 0,
    isDisabled: false
  };
  handleChange = () => {};
  handleInputFilterProductsChange = ({ target: { value, name } }) => {
    this.setState(prevState => ({
      range: {
        ...prevState.range,
        [name]: {
          ...prevState.range[name],
          value: Number(value),
          isValid: value > 0
        }
      }
    }));
  };

  handleFilterProductsChange = ({ currentTarget }) => {
    const formData = new FormData(currentTarget);
    const formDataObject = Object.fromEntries(formData);
    const { min, max } = formDataObject;

    if (Number(min) <= 0 || Number(max) <= 0 || Number(min) >= Number(max)) {
      this.setState(prevState => ({
        ...prevState,
        isDisabled: true
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        isDisabled: false
      }));
    }
  };

  handleFilterProductsSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const { updateProductsFilter = () => {} } = this.props;

    const formData = new FormData(target);
    const formDataObject = Object.fromEntries(formData);
    const data = Object.keys(formDataObject).reduce(
      (acc, key) => ({ ...acc, [key]: Number(formDataObject[key]) }),
      {}
    );
    updateProductsFilter(data);
  };

  render() {
    const {
      range: {
        min: { value: minValue, isValid: isMinValid },
        max: { value: maxValue, isValid: isMaxValid }
      },
      discount,
      isDisabled
    } = this.state;

    return (
      <form
        className={classnames('productsFilter', styles.filterProducts)}
        onSubmit={this.handleFilterProductsSubmit}
        onChange={this.handleFilterProductsChange}
      >
        <section className={classnames(styles.filterProductsSection)}>
          <h3 className={classnames(styles.filterProductsHeader)}>Цена</h3>
          <div className={styles.filterProductsInner}>
            от
            <InputFilterProducts
              name="min"
              value={minValue}
              isValid={isMinValid}
              handleChange={this.handleInputFilterProductsChange}
            />
            до
            <InputFilterProducts
              name="max"
              value={maxValue}
              isValid={isMaxValid}
              handleChange={this.handleInputFilterProductsChange}
            />
          </div>
        </section>
        <section className={classnames(styles.filterProductsSection)}>
          <Discount
            title="Скидка"
            name="sale"
            value={discount}
            onChange={this.handleChange}
          />
        </section>
        <button
          className={styles.filterProductsButton}
          type="submit"
          disabled={isDisabled}
        >
          Применить
        </button>
      </form>
    );
  }
}

FilterProducts.propTypes = {
  filter: propTypes.shape({
    min: propTypes.number,
    max: propTypes.number,
    isValid: propTypes.bool
  }),
  updateProductsFilter: propTypes.func
};

export default FilterProducts;
