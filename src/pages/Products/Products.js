import React from 'react';

import Title from '../../components/Title/Title';
import ListContainer from '../../containers/ListContainer';
import FilterContainer from '../../containers/FilterContainer';
import PaginationContainer from '../../containers/PaginationContainer';

class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            isError: false,
            products: []
        }
    }

    fetchProducts = (url) => {
        this.setState({loading: true})

        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error(response)
                    }
                })
                .then(response => {
                    this.setState({
                        products: response.products,
                        isLoading: false,
                        isError: false
                    })
                })
                .catch(error => {
                    this.setState({
                        isLoading: false,
                        isError: true
                    })
                })
        }, 2000)
    };

    componentDidMount() {
        this.fetchProducts('https://course-api.csssr.school/products')
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? 'loading...' : 'loaded!'}
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
        )
    }
}

export default Products;
