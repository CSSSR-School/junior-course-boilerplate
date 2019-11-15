import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import styles from './List.module.css';
 
console.info(styles);
const List = ({data}) => {
    return (
        <div className={styles.list}>
            {data.map((item) => {
                return (
                    <div className={styles.listItem} key={item.id}>
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
