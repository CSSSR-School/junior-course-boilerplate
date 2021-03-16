import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Checkbox.module.css';
import LogRender from '../LogRender/LogRender';
import {toUpperCaseLetter} from '../../helpers';

class Checkbox extends LogRender {

  changeCategoriesHandler = () => {
    const {category, onChangeFilterCategories} = this.props;
    onChangeFilterCategories(category);
  };

  render() {
    const { category, isActive } = this.props;

    return (
      <button
        className={cx(s.btn, {[s.btnActive]: isActive})}
        type="button"
        name={category}
        onClick={this.changeCategoriesHandler}
      >
        {toUpperCaseLetter(category)}
      </button>
    );
  }
}

Checkbox.propTypes = {
  category: pt.string.isRequired,
  isActive: pt.bool.isRequired,
  onChangeFilterCategories: pt.func.isRequired,
};

export default Checkbox;
