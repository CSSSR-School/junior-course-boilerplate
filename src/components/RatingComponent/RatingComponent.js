import React, {Component} from 'react';
import PropTypes from 'prop-types';
import reactMixin from 'react-mixin';

import logRender from '../../mixins/logRender'

import s from './RatingComponent.module.scss'

class RatingComponent extends Component {
    render(){
        return <div className={`${s.star} ${this.props.isFilled ? s.starFilled : ""}`}/>;
    }
};

reactMixin(RatingComponent.prototype, logRender);

RatingComponent.propTypes = {
    isFilled: PropTypes.bool
};

export default RatingComponent;
