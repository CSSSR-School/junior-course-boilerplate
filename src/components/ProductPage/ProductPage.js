import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import PriceFilter from './PriceFilter/PriceFilter.js';
// import DiscountForm from './DiscountForm/DiscountForm.js';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.discountChange = this.discountChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    // discountChange(event) {
    //     this.props.discountChange(event);
    // }

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
                            {/* <div>
                                <DiscountForm 
                                    handleChange={this.discountChange}
                                    value={this.props.discountValue} />
                            </div> */}
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
