import React from 'react';
import ProductItem from 'csssr-school-product-card';
import './CardsList.css';
import RatingComponent from '../RatingComponent/RatingComponent';
import logRender from '../logRender/logRender';
import reactMixin from 'react-mixin';


function CardsList(props) {
  return (
      <ul className="cards-list">
          {
            props.listProducts.map( (listItem, index) => {
                return (
                  <li className="cards-list__item" key={index}>
                    <ProductItem key={listItem.id}
                                 isInStock={listItem.isInStock}
                                 img={listItem.img}
                                 title={listItem.title}
                                 price={listItem.price}
                                 subPriceContent={''}
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

reactMixin(CardsList.prototype, logRender);

export default CardsList


