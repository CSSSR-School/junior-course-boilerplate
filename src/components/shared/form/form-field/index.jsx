import React from "react";
import PropTypes from "prop-types";
import styled from "./index.module.scss";
import cn from "classnames/bind";

const FIELD_TYPES = {
  input: "input",
  textarea: "textarea"
};

const INPUT_TYPES = {
  text: "text",
  number: "number",
  tel: "tel",
  email: "email",
  search: "search"
};

const stylesCx = cn.bind(styled);

const FormField = ({
  onChange,
  type = INPUT_TYPES.text,
  fieldType = FIELD_TYPES.input,
  disabled,
  hasError,
  ...attrs
}) => {
  const classNames = stylesCx({
    formField: true,
    hasError
  });

  const Field = FIELD_TYPES[fieldType];

  return (
    <Field
      type={type}
      disabled={disabled}
      className={classNames}
      onChange={onChange}
      {...attrs}
    />
  );
};

FormField.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
  fieldType: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  disabled: PropTypes.bool,
  hasError: PropTypes.bool
};

export { FormField };
