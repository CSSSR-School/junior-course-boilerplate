import React from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount';
import Title from '../Title/Title';
import InputNumber from '../InputNumber/InputNumber'
import inputHOC from '../../containers/inputHOC'

import s from './PriceFilter.module.scss'
import logRenderComponent from '../../containers/logRenderComponent';

const HoccedDiscount = inputHOC(Discount);

class PriceFilter extends React.Component {

    render() {
        const {
            maxPrice,
            minPrice,
            discount,
            handleChangeMinPrice,
            handleChangeMaxPrice,
            handleChangeDiscount
        } = this.props;
        return (
            <form className={s.filter}>
                <Title>Цена</Title>
                <div className={s.filterRow}>
                    <div className={s.filterItem}>
                        от
                        <InputNumber
                            value={minPrice}
                            onChange={handleChangeMinPrice}
                        />
                    </div>
                    <div className={s.filterItem}>
                        до
                        <InputNumber
                            value={maxPrice}
                            onChange={handleChangeMaxPrice}
                        />
                    </div>
                </div>
                <HoccedDiscount
                    title="Скидка"
                    name="sale"
                    value={discount}
                    onChange={handleChangeDiscount}
                />
            </form>

        )
    }
}

PriceFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
    discount: PropTypes.number,
};

export default logRenderComponent(PriceFilter);
