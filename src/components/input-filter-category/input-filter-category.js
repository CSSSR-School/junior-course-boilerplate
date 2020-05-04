import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import styles from './input-filter-category.module.scss';

const InputFilterCategory = ({ name, value, isActive, updateSearchWithCategory }) => (
  <Link
    to={updateSearchWithCategory(name)}
    className={classnames(styles.InputFilter, styles.InputFilterCategory, {
      [styles.InputFilterCategoryActive]: isActive
    })}
  >
    {value}
  </Link>
);

InputFilterCategory.propTypes = {
  value: propTypes.string,
  isActive: propTypes.bool,
  updateSearchWithCategory: propTypes.func
};

export default InputFilterCategory;
