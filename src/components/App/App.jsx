import React, {Component} from 'react';
import ProductsList from '../ProductsList/ProductsList.jsx';
import ProductFilterForm from '../ProductFilterForm/ProductFilterForm.jsx';
import {
  calcDiscount,
  getMinPrice,
  getMaxPrice,
  getDiscount,
  getCategories
} from '../../helpers';
import products from '../../products.json';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      minPrice: getMinPrice(products),
      maxPrice: getMaxPrice(products),
      discount: getDiscount(products),
      categories: [],
      products
    }

    this.minPrice = getMinPrice(products);
    this.maxPrice = getMaxPrice(products);
    this.discount = getDiscount(products);
    this.categoriesList = getCategories(products);
  }

  filterProducts = () => {
    const {minPrice, maxPrice, discount, products, categories} = this.state;

    return products.filter(({price, subPriceContent, category}) => {
      const prodDiscount = calcDiscount(price, subPriceContent);
      return (
        price >= minPrice &&
        price <= maxPrice &&
        discount <= prodDiscount &&
        (categories.length === 0 || categories.includes(category))
      )
    });
  }

  changeFilterInputs = (formData) => {
    this.setState({...formData});
  }

  changeFilterCategories = (category) => {
    const categories = [...this.state.categories];
    const itemIndex = categories.findIndex((item) => item === category);

    this.setState({
      categories: itemIndex !== -1 ?
                  [
                    ...categories.slice(0, itemIndex),
                    ...categories.slice(itemIndex + 1)
                  ]
                  :
                  [...categories, category]
    });
  }

  render () {
    const filteredProducts = this.filterProducts();

    return (
      <main>
        <div className="container">
          <div className="product-page">
            <ProductFilterForm
              minPrice={this.minPrice}
              maxPrice={this.maxPrice}
              discount={this.discount}
              categories={this.categoriesList}
              onChangeFilterInputs={this.changeFilterInputs}
              onChangeFilterCategories={this.changeFilterCategories}
            />
            <ProductsList products={filteredProducts}/>
          </div>

        </div>
      </main>
    )
  }
}

export default App;
