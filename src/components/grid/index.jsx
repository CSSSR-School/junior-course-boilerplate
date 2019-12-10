import React from "react";
import styled from "./index.module.scss";
import PropTypes from "prop-types";

const Grid = ({
  children,
  className = "",
  items,
  render,
  columnsCount = 1,
  ...attrs
}) => {
  const style = {
    "--grid-columns-count": columnsCount
  };

  const columns = items.map(item => render(item));

  return (
    <div className={`${styled.grid} ${className}`} style={style} {...attrs}>
      {columns}
    </div>
  );
};

Grid.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  columnsCount: PropTypes.number
};

export { Grid };
