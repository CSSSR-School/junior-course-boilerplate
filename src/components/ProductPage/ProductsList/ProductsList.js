import React from 'react';
import s from './ProductsList.module.css';
import ss from '../ProductItem/ProductItem.module.css';
import ProductItem from 'csssr-school-product-card';
import imgs from './ImageConstants';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && 'starFill'} />;
};

class ProductsList extends React.Component {
    render() {
        return (
            <ul className={s.productsList}>
                <li className={ss.productItem}>
                    <ProductItem
                        isInStock={true}
                        img={imgs.productImg1}
                        title="Название первого товара"
                        price="23 000"
                        subPriceContent=""
                        maxRating={5}
                        rating={4}
                        ratingComponent={ratingComponent}
                    />
                </li>
                <li className={ss.productItem}>
                    <ProductItem
                        isInStock={false}
                        img={imgs.productImg2}
                        title="Название второго товара"
                        price="23 000"
                        subPriceContent=""
                        maxRating={5}
                        rating={4}
                        ratingComponent={ratingComponent}
                    />
                </li>
                <li className={ss.productItem}>
                    <ProductItem
                        isInStock={true}
                        img={imgs.productImg3}
                        title="Название третьего товара"
                        price="23 000"
                        subPriceContent=""
                        maxRating={5}
                        rating={4}
                        ratingComponent={ratingComponent}
                    />
                </li>
                <li className={ss.productItem}>
                    <ProductItem
                        isInStock={true}
                        img={imgs.productImg4}
                        title="Название четвертого товара"
                        price="23 000"
                        subPriceContent=""
                        maxRating={5}
                        rating={4}
                        ratingComponent={ratingComponent}
                    />
                </li>
                <li className={ss.productItem}>
                    <ProductItem
                        isInStock={true}
                        img={imgs.productImg5}
                        title="Название пятого товара"
                        price="23 000"
                        subPriceContent=""
                        maxRating={5}
                        rating={4}
                        ratingComponent={ratingComponent}
                    />
                </li>
                <li className={ss.productItem}>
                    <ProductItem
                        isInStock={false}
                        img={imgs.productImg6}
                        title="Название шестого товара"
                        price="23 000"
                        subPriceContent=""
                        maxRating={5}
                        rating={4}
                        ratingComponent={ratingComponent}
                    />
                </li>
            </ul>
        );
    }
}

export default ProductsList;
