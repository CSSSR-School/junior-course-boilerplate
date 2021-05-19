import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender';

import './FilterForm.css';

class ProductFieldset extends LogRender {
  render() {
    return (
      <form className="filter-form">
        { this.props.children}
        <button
          type="button"
          className="filter-form__reset"
          onClick={ this.props.handleResetFilterButtonClick }
        >
          Сбросить фильтры
        </button>
      </form>
    );
  }
}

ProductFieldset.propTypes = {
  handleResetFilterButtonClick: PropTypes.func.isRequired,
};

export default ProductFieldset;
