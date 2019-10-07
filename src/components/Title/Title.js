import React from "react";
import PropTypes from 'prop-types';

import "./Title.css"

const Title = (props) => {
  return  (
    <h1>{props.text}</h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

Title.defaultProps = {
  text: ''
}

export default Title;
