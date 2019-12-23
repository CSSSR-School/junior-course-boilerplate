import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import {formatMoney, splitEvery} from 'csssr-school-utils'
import logRenderComponent from '../../HOC/logRenderComponent';
import RatingComponent from '../RatingComponent/RatingComponent';
import s from './List.module.scss';
import {Link} from 'react-router-dom';
import getArrayFromStringWithCommas from '../../utils/getArrayFromStringWithCommas';
import PaginationContainer from '../Pagination/Pagination';

class List extends React.Component {

    render() {
        const {data, location, itemsPerPage} = this.props;


        const searchParams = new URLSearchParams(location.search);
        const selectedCategories = getArrayFromStringWithCommas(searchParams.get('category'));
        const paginationActivePage = searchParams.get('page') || 1;

        const getDataFilteredBySearchParams = (data) => {
            const filteredData = data.filter(item => {
                return (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
            });
            return splitEvery(itemsPerPage, filteredData)[paginationActivePage - 1] || []
        };

        const dataFilteredBySearchParams = getDataFilteredBySearchParams(data);

        if (dataFilteredBySearchParams.length > 0) {
            return (
                <div>
                    <ul className={s.list}>
                        {dataFilteredBySearchParams.map((item) => {
                            return (
                                <li className={s.listItem} key={item.id}>
                                    <Link to={`products/${item.id}`}>

                                        <ProductItem
                                            isInStock={item.isInStock}
                                            img={item.imgUrl}
                                            title={item.name}
                                            price={formatMoney(item.price, 0, '.', ' ')}
                                            subPriceContent=""
                                            maxRating={5}
                                            rating={item.rating}
                                            ratingComponent={RatingComponent}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            )
        } else {
            return (
                <div>Ничего не найдено</div>
            )
        }
    }
}

List.propTypes = {
    data: PropTypes.array
};

List.defaultProps = {
    data: []
};

export default logRenderComponent(List);
