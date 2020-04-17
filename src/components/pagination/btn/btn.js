import React from 'react';
import propTypes from 'prop-types';

const Btn = props => {
  const { classList, value, isDisabled, handleClick } = props;
  return (
    <button
      className={classList}
      disabled={isDisabled || false}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

Btn.propTypes = {
  classList: propTypes.string,
  value: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func
};

export default Btn;
