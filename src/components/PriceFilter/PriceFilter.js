import React, {Component} from 'react';
import PropTypes from 'prop-types';
import reactMixin from 'react-mixin';

import logRender from '../../mixins/logRender'

import s from './Filter.module.scss'

class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterMinPrice = React.createRef();
        this.filterMaxPrice = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.priceFilterData(this.filterMinPrice.current.value, this.filterMaxPrice.current.value);
    };

    render() {
        return (
            <form className={s.filter} onSubmit={this.handleSubmit}>
                <h4 className={s.filterTitle}>Цена</h4>
                <div className={s.filterRow}>
                    <div className={s.filterItem}>
                        от <input type="text" defaultValue={this.props.minPrice} ref={this.filterMinPrice}/>
                    </div>
                    <div className={s.filterItem}>
                        до <input type="text" defaultValue={this.props.maxPrice} ref={this.filterMaxPrice}/>
                    </div>
                </div>
                <button type="submit" className={s.filterSubmit}><span>Применить</span></button>
            </form>

        )
    }
};

reactMixin(PriceFilter.prototype, logRender);

PriceFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
};

export default PriceFilter;
