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
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    formSubmit() {
        this.props.formSubmit();
    }

    // discountChange(value) {
    //     this.props.discountChange(value);
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
                                formSubmit={this.formSubmit}
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
