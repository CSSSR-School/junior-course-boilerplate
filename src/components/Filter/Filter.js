import React from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount';
import inputHOC from '../../HOC/inputHOC'
import logRenderComponent from '../../HOC/logRenderComponent';
import Title from '../Title/Title';
import InputNumber from '../InputNumber/InputNumber';
import s from './Filter.module.scss';
import CategoryContainer from '../../containers/CategoryContainer';
import {store} from '../../store';
import {selectCategory} from '../../store/actions';

const HoccedDiscount = inputHOC(Discount);

class PriceFilter extends React.Component {
    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        const urlFilterParams = event.state ? event.state['filter'] : '';
        store.dispatch(selectCategory(urlFilterParams ? urlFilterParams.split(',') : []))
    };

    handleResetFilters = () => {
        window.history.pushState({}, 'category', '/');
        this.props.handleResetFilters()
    };

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
                <Title>Категории</Title>
                <div className={s.filterRow}>
                    <CategoryContainer/>
                </div>
                <div className={s.filterRow}>
                    <button type="button" className={s.filterButton} onClick={this.handleResetFilters}>Сбросить фильтры
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
    handleChangeMinPrice: PropTypes.func,
    handleChangeMaxPrice: PropTypes.func,
    handleChangeDiscount: PropTypes.func,
    handleResetFilters: PropTypes.func
};

export default logRenderComponent(PriceFilter);
