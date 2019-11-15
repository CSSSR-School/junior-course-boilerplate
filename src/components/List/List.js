import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import s from './List.module.scss';
 
const List = ({data}) => {
    return (
        <ul className={s.list}>
            {data.map((item) => {
                return (
                    <li className={s.listItem} key={item.id}>
                        <ProductItem
                            isInStock={item.isInStock}
                            img={item.imgUrl}
                            title={item.name}
                            price={item.price}
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
};

List.propTypes = {
    data: PropTypes.array
};

List.defaultProps = {
    data: []
};

export default List;
