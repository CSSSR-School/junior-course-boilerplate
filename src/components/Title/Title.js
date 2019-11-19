import React from "react";
import PropTypes from 'prop-types';
import s from './Title.module.scss'

const Title = ({text}) => {
    return (
        <h1 className={s.title}>{text}</h1>
    )
};

Title.propTypes = {
    text: PropTypes.string
};

export default Title;


