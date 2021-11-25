import React from 'react';
import ProductItem from 'csssr-school-product-card';
import './CardsList.css';



function CardsList(props) {

  const ratingComponent = ({isFilled}) => {
    return <div className={isFilled && 'starFill'} />
  }

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
                                 ratingComponent={ratingComponent}
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

// export default class CardsList extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.listRender = this.props.listData;
//   }
//
//   render() {
//     return (
//       <ul className="cards-list">
//         {
//           this.props.listData.map( ({id, title}) => {
//               return (
//                 <Card key={id} title={title}/>
//               );
//             }
//           )
//         }
//       </ul>
//     );
//   }
// }


