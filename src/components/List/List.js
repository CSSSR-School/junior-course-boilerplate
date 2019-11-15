import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import './List.css';

const List = ({data}) => {
    return (
        <div className='list'>
            {data.map((item) => {
                return (
                    <div className="list__item">
                        <ProductItem
                            isInStock={item.isInStock}
                            img={item.imgUrl}
                            title={item.name}
                            price={item.price}
                            subPriceContent={item.subPriceContent}
                            maxRating={5}
                            rating={item.rating}
                            ratingComponent={RatingComponent}
                            key={item.id}
                        />
                    </div>
                )
            })}
        </div>
    )
};


List.propTypes = {
    data: PropTypes.array
};

List.defaultProps = {
    data: []
};

export default List;
