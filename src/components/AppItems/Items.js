import React from 'react'
import ProductItem from 'csssr-school-product-card'
import styled from './Items.css'

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && "starFill"} />;
};

const Items = ({data}) => {
    let list = data.map(item =>
        <ProductItem
            key={item.id}
            isInStock={Boolean(item.isInStock)}
            img={String(item.img)}
            title={item.title}
            price={item.price}
            subPriceContent={item.subprice}
            maxRating={Number(item.maxRating)}
            rating={Number(item.rating)}
            ratingComponent={ratingComponent} />      
        );
    return <div className='item-list'>{list}</div>
}



export default  Items