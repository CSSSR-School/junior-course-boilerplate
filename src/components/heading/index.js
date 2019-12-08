import React from "react";
import { HEADINGS_MAP } from "utils/constants";
import styled from "./index.module.scss";

const Heading = ({ level = 1, className = "", children, ...attrs }) => {
  const Tag = HEADINGS_MAP[`h${level}`] || HEADINGS_MAP.default;

  const styles = {
    "--heading-size": level
  };

  return (
    <Tag className={`${styled.title} ${className}`} style={styles} {...attrs}>
      {children}
    </Tag>
  );
};

export { Heading };
