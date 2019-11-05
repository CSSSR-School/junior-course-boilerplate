import React, { Component } from 'react'

import { CatalogList } from '../../Components'

class CatalogContainer extends Component {
    
    state = {
        catalog: [
            {
                isInStock: true,
                img: 'https://via.placeholder.com/224x200',
                name: 'Название первого товара',
                price: '23 000',
                subPriceContent: '',
                maxRating: 5,
                rating: 3,
            },
            {
                isInStock: false,
                img: 'https://via.placeholder.com/224x200',
                name: 'Название второго товара',
                price: '23000',
                subPriceContent: '',
                maxRating: 5,
                rating: 3,
            },
            {
                isInStock: true,
                img: 'https://via.placeholder.com/224x200',
                name: 'Название третьего товара',
                price: '23 000',
                subPriceContent: '23 000',
                maxRating: 5,
                rating: 3,
            },
            {
                isInStock: true,
                img: 'https://via.placeholder.com/224x200',
                name: 'Название четвертого товара',
                price: '23000',
                subPriceContent: '23 000',
                maxRating: 5,
                rating: 3,
            },
            {
                isInStock: true,
                img: 'https://via.placeholder.com/224x200',
                name: 'Название пятого товара',
                price: '23000',
                maxRating: 5,
                rating: 3,
            },
            {
                isInStock: false,
                img: 'https://via.placeholder.com/224x200',
                name: 'Название шестого товара',
                price: '23000',
                maxRating: 5,
                rating: 3,
            },
        ]
    }

    render() {
        return <>
            <CatalogList
                catalog={this.state.catalog}
            />
        </>
    }
}

export default CatalogContainer