import React from 'react';
import appContext from '../app-context';
import data from '../products.json';
import memoize from '../memoize';
import List from '../components/List/List';


const ListContainer = () => {
    return <appContext.Consumer>
        {({state, dispatch}) => {
            const {minPrice, maxPrice, discount, selectedCategories} = state;
            const getFilteredData = memoize((data, minPrice, maxPrice, discount, selectedCategories) => {
                return data.filter((item) => {
                    return item.price >= minPrice
                        && item.price <= maxPrice
                        && item.discount >= discount
                        && (selectedCategories.length > 0 ? selectedCategories.includes(item.category) : true)
                })
            });
            return <List data={getFilteredData(data, minPrice, maxPrice, discount, selectedCategories)}/>
        }}
    </appContext.Consumer>
};


export default ListContainer;
