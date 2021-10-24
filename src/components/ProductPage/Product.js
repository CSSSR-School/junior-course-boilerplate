import React from 'react';
import ProductItem from 'csssr-school-product-card';
import LogRender from '../../LogRender';
import ratingComponent from './ratingComponent/ratingComponent';

class Product extends LogRender {
    render() {
        return (
            <ProductItem
                category={this.props.category}
                isInStock={this.props.isInStock}
                img={this.props.img}
                title={this.props.title}
                price={this.props.price}
                subPriceContent={this.props.subPriceContent}
                maxRating={this.props.maxRating}
                rating={this.props.rating}
                ratingComponent={ratingComponent}
            />
        );
    }
}

export default Product;
