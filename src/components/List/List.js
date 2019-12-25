import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import {formatMoney, splitEvery} from 'csssr-school-utils'
import logRenderComponent from '../../HOC/logRenderComponent';
import RatingComponent from '../RatingComponent/RatingComponent';
import s from './List.module.scss';
import {Link} from 'react-router-dom';

class List extends React.Component {

    render() {
        const {data, location, itemsPerPage} = this.props;

        const paginationActivePage = location.query.page || 1;

        const getActivePageData = (data) => {
            return splitEvery(itemsPerPage, data)[paginationActivePage - 1] || []
        };

        if (getActivePageData(data).length > 0) {
            return (
                <div>
                    <ul className={s.list}>
                        {getActivePageData(data).map((item) => {
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
