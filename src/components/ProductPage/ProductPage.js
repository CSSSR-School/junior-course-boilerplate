import React from 'react';
import { maxBy, minBy, toInt } from 'csssr-school-utils';

import ProductPageTitle from './ProductPageTitle/ProductPageTitle.js';
import ProductsList from './ProductsList/ProductsList.js';
import ProductsFilter from './ProductsFilter/ProductsFilter';

import data from '../../products.json';
import s from './ProductPage.module.css';

function getMinValue(arr) {
    // убираем нечисловые символы
    arr.forEach(item => {
        return item.price = toInt(item.price);
    });
    // ищем минимальную цену price
    return minBy(obj => obj.price, arr).price;
  }
  
function getMaxValue(arr) {
// ищем максимальную цену price
return maxBy(obj => obj.price, arr).price;
}

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: getMinValue(data),
            maxValue: getMaxValue(data)
        };
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
    }

    handleMinChange(minValue) {
        this.setState({minValue});
    }
    
    handleMaxChange(maxValue) {
        this.setState({maxValue});
    }

    render() {
        const minValue = this.state.minValue;
        const maxValue = this.state.maxValue;

        return (
            <main>
                <div className={s.productPage}>   
                    <ProductPageTitle />
                    <div className={s.productPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <ProductsFilter
                                onMinValueChange={this.handleMinChange}
                                onMaxValueChange={this.handleMaxChange}
                                minValue={minValue}
                                maxValue={maxValue}
                            />
                        </div>
                        <ProductsList data={data}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductPage;
