import React from 'react';
import pt from 'prop-types';
import cx from 'classnames';
import s from './Checkbox.module.css';
import LogRender from '../LogRender/LogRender';
import withCheckbox from '../../hocs/withCheckbox';
import {toUpperCaseLetter} from '../../helpers';

class Checkbox extends LogRender {

  render() {
    const {category, isActive, onClick} = this.props;

    return (
      <button
        className={cx(s.btn, {[s.btnActive]: isActive})}
        type="button"
        name={category}
        onClick={onClick}
      >
        {toUpperCaseLetter(category)}
      </button>
    )
  }
}

Checkbox.propTypes = {
  category: pt.string.isRequired,
  isActive: pt.bool.isRequired,
  onClick: pt.func.isRequired
};

export default withCheckbox(Checkbox);
