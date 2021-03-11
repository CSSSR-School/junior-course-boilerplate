import React from 'react';
import pt from 'prop-types';
import s from './InputDiscount.module.css';
import LogRender from '../LogRender/LogRender';
import withInput from '../../hocs/withInput';

class InputDiscount extends LogRender {

  render() {
    const {name, value, onChange} = this.props;

    return (
      <input
        className={s.discountInput}
        name={name}
        value={value}
        onChange={onChange}
      />
    )
  }
}

InputDiscount.propTypes = {
  name: pt.string.isRequired,
  value: pt.number.isRequired,
  onChange: pt.func.isRequired
};

export default withInput(InputDiscount);
