import React from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount';
import inputHOC from '../../HOC/inputHOC'
import logRenderComponent from '../../HOC/logRenderComponent';
import Title from '../Title/Title';
import InputNumber from '../InputNumber/InputNumber';
import s from './Filter.module.scss';
import CategoryContainer from '../../containers/CategoryContainer';
import {Link} from 'react-router-dom';
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
            handleResetFilters
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
                    <CategoryContainer/>
                </div>
                <div className={s.filterRow}>
                    <Link onClick={handleResetFilters} className={s.filterButton} to="/">Сбросить фильтры</Link>
                </div>
            </form>
        )
    }
}

PriceFilter.propTypes = {
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
    discount: PropTypes.number,
    handleChangeMinPrice: PropTypes.func,
    handleChangeMaxPrice: PropTypes.func,
    handleChangeDiscount: PropTypes.func
};

export default logRenderComponent(PriceFilter);
