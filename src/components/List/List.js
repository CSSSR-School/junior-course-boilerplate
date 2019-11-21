import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import {formatMoney} from 'csssr-school-utils'
import RatingComponent from '../RatingComponent/RatingComponent';

import s from './List.module.scss';

const List = ({data}) => {
    if (data.length > 0) {
        return (
            <ul className={s.list}>
                {data.map((item) => {
                    return (
                        <li className={s.listItem} key={item.id}>
                            <ProductItem
                                isInStock={item.isInStock}
                                img={item.imgUrl}
                                title={item.name}
                                price={formatMoney(item.price, 0, '.', ' ')}
                                subPriceContent={item.subPriceContent}
                                maxRating={5}
                                rating={item.rating}
                                ratingComponent={RatingComponent}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <div>Ничего не найдено</div>
        )
    }
};

List.propTypes = {
    data: PropTypes.array
};

List.defaultProps = {
    data: []
};

export default List;
