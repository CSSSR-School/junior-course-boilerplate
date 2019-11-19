import React, {Component} from 'react';
import reactMixin from "react-mixin";

import logRender from "../../mixins/logRender";

import s from './MainTitle.module.scss'


class MainTitle extends Component {
    render() {
        return (
            <h1 className={s.title}>Список товаров</h1>
        )
    }
};

reactMixin(MainTitle.prototype, logRender);

export default MainTitle;

