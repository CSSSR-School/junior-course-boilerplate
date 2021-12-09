import React from 'react';
import ProductItem from 'csssr-school-product-card';
import './CardsList.css';
import RatingComponent from '../RatingComponent/RatingComponent';


class CardsList extends React.PureComponent {

  render() {
    return (
      <ul className="cards-list">
        {
          this.props.listProducts.map( (listItem, index) => {
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
          })
        }
      </ul>
    );
  }
}

export default CardsList


