import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../../LogRender/LogRender';

import './CategoryFieldset.css';

class CategoryFieldset extends LogRender {
  render() {
    return (
      <fieldset className="
        filter-fieldset
        filter-fieldset--category
      ">

        <legend className="
            filter-fieldset__legend
            filter-fieldset--category__legend
          ">
          Категории
        </legend>

        <div className="filter-fieldset--category__container">
          { this.props.categories.map((category) => (
            <button
              type="button"
              className="category-checkbox"
              htmlFor={ `filter-category--${category}` }
              key={ category }
              active={ (category === this.props.category).toString() }
              onClick={ () => this.props.handleCategoryChange(category) }
            >
              { category }
            </button>
          )) }
        </div>

      </fieldset>
    );
  }
}

CategoryFieldset.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
  category: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryFieldset;
