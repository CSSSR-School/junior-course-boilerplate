import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import styles from './filter-products.module.scss';
import InputFilterProductsNumber from '../input-filter-products';
import InputFilterProductsDiscount from 'csssr-school-input-discount';
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
    discount: this.props.filter.discount,
    isDisabled: false
  };

  handleInputFilterProductsChange = ({ target: { value, name } }) => {
    const maskedValue = Number(value.replace(/\D/g, ''));
    switch (name) {
      case 'min':
      case 'max':
        this.setState(prevState => ({
          range: {
            ...prevState.range,
            [name]: {
              ...prevState.range[name],
              value: maskedValue,
              isValid: value > 0
            }
          }
        }));
        break;
      case 'sale':
        this.setState(prevState => ({
          ...prevState,
          discount: maskedValue,
        }));
        break;
      default:
        throw new Error(`Unknown name: ${name}`);
    }
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
            <InputFilterProductsNumber
              name="min"
              value={minValue}
              isValid={isMinValid}
              handleChange={this.handleInputFilterProductsChange}
            />
            до
            <InputFilterProductsNumber
              name="max"
              value={maxValue}
              isValid={isMaxValid}
              handleChange={this.handleInputFilterProductsChange}
            />
          </div>
        </section>
        <section className={classnames(styles.filterProductsSection)}>
          <InputFilterProductsDiscount
            title="Скидка"
            name="sale"
            value={discount}
            onChange={this.handleInputFilterProductsChange}
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
