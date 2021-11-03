import React from 'react';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import PriceFilter from './PriceFilter/PriceFilter.js';
import HoccedDiscountForm from './DiscountForm/DiscountForm.js';
import Category from './Category/Category.js';
import ResetFilters from './ResetFilters/ResetFilters.js';

import s from './ProductPage.module.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleCategoriesClick = this.handleCategoriesClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleCategoriesClick(event) {
        this.props.handleCategoriesClick(event);
    }

    handleResetClick() {
        this.props.handleResetClick();
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
                            <Category handleClick={this.handleCategoriesClick} />
                            <ResetFilters handleClick={this.handleResetClick} />
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
