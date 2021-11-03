import React from 'react';
import s from './ResetFilters.module.css';

class ResetFilters extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick();
    }

    render() {
        return (
            <div>
                <button 
                    className={s.button_reset}
                    onClick={this.handleClick}>Сбросить фильтры
                </button>
            </div>
        );
    }
}

export default ResetFilters;
