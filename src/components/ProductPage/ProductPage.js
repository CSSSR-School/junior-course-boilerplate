import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import ProductsFilter from './ProductsFilter/ProductsFilter.js';
import Discount from 'csssr-school-input-discount';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);
        this.discountChange = this.discountChange.bind(this);
    }

    handleChangeMin(minValue) {
        this.props.changeMin(minValue);
    }
    
    handleChangeMax(maxValue) {
        this.props.changeMax(maxValue);
    }

    discountChange(event) {
        this.props.discountChange(event.target.value);
    }

    render() {
        let title = 'Скидка';
        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <ProductsFilter
                                minValue={this.props.minValue}
                                maxValue={this.props.maxValue}
                                changeMin={this.handleChangeMin}
                                changeMax={this.handleChangeMax}
                            />
                            <div>
                                <Discount
                                    title={title}
                                    value={this.props.discountValue}
                                    onChange={this.discountChange}
                                />
                            </div>
                        </div>
                        <ProductsList
                            data={this.props.filteredProducts}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductPage;
