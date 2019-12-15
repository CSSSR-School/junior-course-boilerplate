import React from "react";
import PropTypes from "prop-types";
import { HEADINGS_MAP } from "utils/constants";
import styled from "./index.module.scss";

const Heading = ({ level = 1, className = "", children, ...attrs }) => {
  const Tag = HEADINGS_MAP.get(`h${level}`) || HEADINGS_MAP.get("default");

  const styles = {
    "--heading-size": level
  };

  return (
    <Tag className={`${styled.title} ${className}`} style={styles} {...attrs}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export { Heading };
