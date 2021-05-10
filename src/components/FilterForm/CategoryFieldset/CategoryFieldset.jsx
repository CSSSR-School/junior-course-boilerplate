import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../../LogRender/LogRender';

import { AppContext } from '../../App/App';

import './CategoryFieldset.css';

class CategoryFieldset extends LogRender {
  render() {
    return (
      <AppContext.Consumer>
        { ({ categories, category: currentCategory }) => (
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
              { categories.map((category) => (
                  <button
                    className="category-checkbox"
                    htmlFor={ `filter-category--${category}` }
                    key={ category }
                    active={ category === currentCategory || null }
                    onClick={ this.props.onChange }
                  >
                    { category }
                </button>
              )) }
            </div>

          </fieldset>
        ) }
      </AppContext.Consumer>
    );
  }
}

CategoryFieldset.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default CategoryFieldset;
