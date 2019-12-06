import React from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount';
import inputHOC from '../../HOC/inputHOC'
import logRenderComponent from '../../HOC/logRenderComponent';
import s from './Filter.module.scss';
import Title from '../Title/Title';
import InputNumber from '../InputNumber/InputNumber';
import Category from '../Category/Category';

const HoccedDiscount = inputHOC(Discount);

class PriceFilter extends React.Component {

    render() {
        const {
            maxPrice,
            minPrice,
            discount,
            handleChangeMinPrice,
            handleChangeMaxPrice,
            handleChangeDiscount,
            handleClearFilter
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
                <Title>Категории</Title>
                <div className={s.filterRow}>
                    <Category/>
                </div>
                <div className={s.filterRow}>
                    <button type="button" className={s.filterButton} onClick={handleClearFilter}>Сбросить фильтры
                    </button>
                </div>
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
