import React from "react";
import PropTypes from 'prop-types';

import styles from "./Title.module.css"

const Title = (props) => {
  return  (
    <h1 className={styles.title}>{props.text}</h1>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired
};

Title.defaultProps = {
  text: ''
};

export default Title;
