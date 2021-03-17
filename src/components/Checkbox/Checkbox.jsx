import React, {memo} from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Checkbox.module.css';
import {toUpperCaseLetter} from '../../helpers';

const Checkbox = ({isActive, category, onChangeFilter}) => {

  const changeCategoriesHandler = () => onChangeFilter({name: 'categories', value: category});

  return (
    <button
      className={cx(s.btn, {[s.btnActive]: isActive})}
      type="button"
      name={category}
      onClick={changeCategoriesHandler}
    >
      {toUpperCaseLetter(category)}
    </button>
  );
}

Checkbox.propTypes = {
  category: pt.string.isRequired,
  isActive: pt.bool.isRequired,
  onChangeFilter: pt.func.isRequired,
};

export default memo(Checkbox);
