import React from 'react';
import ProductItem from 'csssr-school-product-card';
import './CardsList.css';
import RatingComponent from '../RatingComponent/RatingComponent';



function CardsList(props) {

  return (
      <ul className="cards-list">
          {
            props.listProducts.map( (listItem) => {
                return (
                  <li className="cards-list__item">
                    <ProductItem key={listItem.id}
                                 isInStock={listItem.isInStock}
                                 img={listItem.img}
                                 title={listItem.title}
                                 price={listItem.price}
                                 subPriceContent={listItem.subPriceContent}
                                 maxRating={listItem.maxRating}
                                 rating={listItem.rating}
                                 ratingComponent={RatingComponent}
                    />
                  </li>
                )
              }
            )
          }
      </ul>
    );
}

export default CardsList


