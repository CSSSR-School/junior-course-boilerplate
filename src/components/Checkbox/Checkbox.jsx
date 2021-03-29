import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Checkbox.module.css';
import {toUpperCaseLetter} from '../../helpers';

const Checkbox = ({
  isActive,
  category,
  onChangeFilterCategories
}) => {

  const changeCategoriesHandler = () => onChangeFilterCategories(category);

  return (
    <button
      className={cx(s.categoryBtn, {[s.activeCategoryBtn]: isActive})}
      type='button'
      onClick={changeCategoriesHandler}
    >
      {toUpperCaseLetter(category)}
    </button>
  );
};

Checkbox.propTypes = {
  category: pt.string.isRequired,
  isActive: pt.bool.isRequired,
  onChangeFilterCategories: pt.func.isRequired
};

export default memo(Checkbox);
