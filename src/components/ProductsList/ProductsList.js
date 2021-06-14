import React from 'react';
import s from './ProductsList.module.css';
import ProductItem from '../ProductItem/ProductItem.js';

import imgProduct1 from './img/img1.jpg';
import imgProduct2 from './img/img2.jpg';
import imgProduct3 from './img/img3.jpg';
import imgProduct4 from './img/img4.jpg';
import imgProduct5 from './img/img5.jpg';
import imgProduct6 from './img/img6.jpg';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && 'starFill'} />;
};

class ProductsList extends React.Component {
    render() {
        return (
            <ul>
                <ProductItem
                    isInStock={true}
                    img={imgProduct1}
                    title="Название первого товара"
                    price="23 000"
                    subPriceContent=""
                    maxRating={5}
                    rating={4}
                    ratingComponent={ratingComponent}
                />
                <ProductItem
                    isInStock={false}
                    img={imgProduct2}
                    title="Название второго товара"
                    price="23 000"
                    subPriceContent=""
                    maxRating={5}
                    rating={4}
                    ratingComponent={ratingComponent}
                />
                <ProductItem
                    isInStock={true}
                    img={imgProduct3}
                    title="Название третьего товара"
                    price="23 000"
                    subPriceContent=""
                    maxRating={5}
                    rating={4}
                    ratingComponent={ratingComponent}
                />
                <ProductItem
                    isInStock={true}
                    img={imgProduct4}
                    title="Название четвертого товара"
                    price="23 000"
                    subPriceContent=""
                    maxRating={5}
                    rating={4}
                    ratingComponent={ratingComponent}
                />
                <ProductItem
                    isInStock={true}
                    img={imgProduct5}
                    title="Название пятого товара"
                    price="23 000"
                    subPriceContent=""
                    maxRating={5}
                    rating={4}
                    ratingComponent={ratingComponent}
                />
                <ProductItem
                    isInStock={false}
                    img={imgProduct6}
                    title="Название шестого товара"
                    price="23 000"
                    subPriceContent=""
                    maxRating={5}
                    rating={4}
                    ratingComponent={ratingComponent}
                />
            </ul>
        );
    }
}

export default ProductsList;
