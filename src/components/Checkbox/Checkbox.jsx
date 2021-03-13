import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Checkbox.module.css';
import LogRender from '../LogRender/LogRender';
import {toUpperCaseLetter} from '../../helpers';

class Checkbox extends LogRender {

  render() {
    const {category, isActive, onChangeFilterCategories} = this.props;

    return (
      <button
        className={cx(s.btn, {[s.btnActive]: isActive})}
        type="button"
        name={category}
        onClick={() => onChangeFilterCategories(category)}
      >
        {toUpperCaseLetter(category)}
      </button>
    )
  }
}

Checkbox.propTypes = {
  category: pt.string.isRequired,
  isActive: pt.bool.isRequired,
  onChangeFilterCategories: pt.func.isRequired
};

export default Checkbox;
