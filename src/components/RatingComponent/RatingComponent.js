import React, {Component} from 'react';
import PropTypes from 'prop-types';

import s from './RatingComponent.module.scss'

class RatingComponent extends Component {
    render(){
        return <div className={`${s.star} ${this.props.isFilled ? s.starFilled : ""}`}/>;
    }
};

RatingComponent.propTypes = {
    isFilled: PropTypes.bool
};

export default RatingComponent;
