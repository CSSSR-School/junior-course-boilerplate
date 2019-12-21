import React from "react";
import PropTypes from "prop-types";
import styled from "./index.module.scss";
import cn from "classnames/bind";
import { Spinner } from "components/shared/spinner";

const BUTTON_SIZES = {
  lg: "lg"
};

const BUTTON_TYPES = {
  button: "button",
  reset: "reset",
  submit: "submit"
};

const stylesCx = cn.bind(styled);

const Button = ({
  onClick,
  type = BUTTON_TYPES.button,
  size,
  disabled,
  isFull,
  isSpinnerShown,
  className = "",
  children,
  ...attrs
}) => {
  const classNames = stylesCx({
    btn: true,
    "btn--lg": size === BUTTON_SIZES.lg,
    "btn--full": isFull
  });

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${classNames} ${className}`}
      onClick={onClick}
      {...attrs}
    >
      {children}
      {isSpinnerShown && <Spinner className={styled.btn__spinner} />}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES))
};

export { Button };
