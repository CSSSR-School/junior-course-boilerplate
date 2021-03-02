import React, {Component} from 'react';
import ProductsList from '../ProductsList/ProductsList.jsx';
import ProductFilterForm from '../ProductFilterForm/ProductFilterForm.jsx';
import products from '../../products.json';
import {maxBy, minBy} from 'csssr-school-utils';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      minPrice: this.getProductPrice(minBy),
      maxPrice: this.getProductPrice(maxBy),
      isDisabled: false,
      products,
      filteredProducts: products
    }
  }

  getProductPrice = (cb) => cb(product => product.price, products).price;

  filterProductsByPrice = () => {
    const {minPrice, maxPrice, products} = this.state;
    const newProducts = [...products];
    const filteredProducts = newProducts.filter(({price}) => price >= minPrice && price <= maxPrice);

    this.setState({filteredProducts});
  }

  changePriceRange = ({name, value}) => {
    this.setState({
      [name]: Number(value)
    }, () => this.validateForm())
  }

  validateForm = () => {
    const {minPrice, maxPrice} = this.state;
    const isValid = minPrice <= 0 || maxPrice <= 0 || minPrice >= maxPrice;

    this.setState({isDisabled: isValid});
  }

  render () {
    const {filteredProducts, minPrice, maxPrice, isDisabled} = this.state;

    return (
      <main>
        <div className="container">
          <div className="product-page">
            <ProductFilterForm
              minPrice={minPrice}
              maxPrice={maxPrice}
              isDisabled={isDisabled}
              onChangePriceRange={this.changePriceRange}
              onFormSubmit={this.filterProductsByPrice}
            />
            <ProductsList products={filteredProducts}/>
          </div>

        </div>
      </main>
    )
  }
}

export default App;
