import React from 'react'

import CatalogItem from 'csssr-school-product-card'

import styled from 'styled-components'

// Styles
const ListItem = styled.li`
    margin-right: 2em;
    margin-bottom: 3.5em;
`
const List = styled.ul`
    max-width: 768px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    margin-right: -2em;
    margin-bottom: -3.5em;
    list-style: none;
`

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled && "starFill"} />;
};

const CatalogList = ({ catalog }) => {
    return <List>
        {catalog.map(item => {
            return <ListItem>
                <CatalogItem
                    isInStock={item.isInStock}
                    img={item.img}
                    title={item.name}
                    price={item.price}
                    subPriceContent={item.subPriceContent}
                    maxRating={item.maxRating}
                    rating={item.rating}
                    ratingComponent={ratingComponent}
                />
            </ListItem>
        })}
    </List>
}

export default CatalogList