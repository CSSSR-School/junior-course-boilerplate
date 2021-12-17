import React from 'react';
import './CardsList.css';
import logRender from '../logRender/logRender';
import ProductCard from '../ProductCard/ProductCard';


class CardsList extends logRender {

  render() {
    return (
      <ul className="cards-list">
        {
          this.props.listProducts.map( (listItem, index) => {
            return (
              <li className="cards-list__item" key={index}>
                <ProductCard key={listItem.id}
                             isInStock={listItem.isInStock}
                             img={listItem.img}
                             title={listItem.title}
                             price={listItem.price}
                             subPriceContent={''}
                             maxRating={listItem.maxRating}
                             rating={listItem.rating}
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


