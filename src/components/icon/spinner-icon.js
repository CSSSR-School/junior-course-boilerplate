import React from 'react';
import propTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SpinnerIcon = ({ width = 100, height = 100 }) => (
  <Loader
    type="Puff"
    color="#5695ED"
    width={width}
    height={height}
  />
);

SpinnerIcon.propTypes = {
  width: propTypes.number,
  height: propTypes.number
};

export default SpinnerIcon;
