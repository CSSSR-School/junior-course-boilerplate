import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import PriceFilter from './PriceFilter/PriceFilter.js';
import HoccedDiscountForm from './DiscountForm/DiscountForm.js';
import Category from './Category/Category.js';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleClick(event) {
        this.props.handleClick(event);
    }

    render() {
        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <PriceFilter
                                minValue={this.props.minValue}
                                maxValue={this.props.maxValue}
                                handleChange={this.handleChange}
                            />
                            <div>
                                <HoccedDiscountForm 
                                    handleChange={this.handleChange}
                                    value={this.props.sale} />
                            </div>
                            <Category
                                handleClick={this.handleClick} />
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
