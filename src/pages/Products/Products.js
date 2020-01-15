import React from 'react';

import Title from '../../components/Title/Title';
import ListContainer from '../../containers/ListContainer';
import FilterContainer from '../../containers/FilterContainer';
import PaginationContainer from '../../containers/PaginationContainer';

export const Products = () => {
    return (
        <div>
            <div className="AppHeader">
                <Title>Список товаров</Title>
            </div>
            <div className="AppBody">
                <aside className="AppSidebar">
                    <FilterContainer/>
                </aside>
                <main className="AppMain">
                    <ListContainer/>
                    <PaginationContainer/>
                </main>
            </div>
        </div>
    );
};

export default Products;
