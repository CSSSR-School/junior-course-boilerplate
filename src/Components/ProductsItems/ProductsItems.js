import React from "react";
import ProductCard from "csssr-school-product-card";

const ProductsItems = props => {

  const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && "starFill"} />;
  };

  const productsItems = props.data
    .map(({ id, title, isInStock, imgProduct, price, subPriceContent, maxRating, rating }) => (
      <ProductCard 
        key={id}
        isInStock={isInStock}
        img={imgProduct}
        title={title}
        price={price}
        subPriceContent={subPriceContent}
        maxRating={maxRating}
        rating={rating}
        ratingComponent={ratingComponent}
      />)
    );

  const styles = {
    width: '700px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 0

  }

  return (
    <ul style={styles}>
      {productsItems}
    </ul>
  );
};

export default ProductsItems;