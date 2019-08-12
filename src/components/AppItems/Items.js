import React from 'react'
import ProductItem from 'csssr-school-product-card'
import './Items.css'

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && "starFill"} />;
};

const Items = ({data}) => {
    const list = data.map(item =>
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
    return <div className='goods-card'> {list} </div>
}
export default  Items