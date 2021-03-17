import React, {Component} from 'react';
import ProductFilterContainer from '../../containers/ProductFilterContainer.jsx';
import ProductsListContainer from '../../containers/ProductsListContainer.jsx';
import PaginationContainer from '../../containers/PaginationContainer.jsx';

class App extends Component {

  render () {
    return (
      <main>
        <div className="container">
          <div className="product-page">
            <ProductFilterContainer/>
            <div className="products-section">
              <ProductsListContainer/>
              <PaginationContainer/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
