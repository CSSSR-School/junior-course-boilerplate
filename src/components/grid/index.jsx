import React from "react";
import styled from "./index.module.scss";
import PropTypes from "prop-types";

const Grid = ({
  children,
  className = "",
  keyValue = "id",
  items,
  render,
  columnsCount = 1,
  ...attrs
}) => {
  const style = {
    "--grid-columns-count": columnsCount
  };

  const columns = items.map(item => (
    <li key={item[keyValue]}>{render(item)}</li>
  ));

  return (
    <ul className={`${styled.grid} ${className}`} style={style} {...attrs}>
      {columns}
    </ul>
  );
};

Grid.propTypes = {
  keyValue: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  columnsCount: PropTypes.number
};

export { Grid };
