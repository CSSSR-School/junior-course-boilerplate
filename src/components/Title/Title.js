import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.scss'

const Title = ({children}) => {
    return (
        <h1 className={s.title}>{children}</h1>
    )
};

Title.propTypes = {
    text: PropTypes.node
};

export default Title;


