import React, {Component} from 'react';
import {
  calcDiscount,
  getMinPrice,
  getMaxPrice,
  getDiscount,
  getCategories
} from '../../helpers';
import {PRODUCTS_PER_PAGE} from '../../consts';
import FilterFormContext from '../../context/filterForm';
import products from '../../products.json';
import ProductsList from '../ProductsList/ProductsList.jsx';
import ProductFilterForm from '../ProductFilterForm/ProductFilterForm.jsx';
import Pagination from '../Pagination/Pagination.jsx';

const getInitialState = (products) => {
  return {
    formFields: {
      minPrice: getMinPrice(products),
      maxPrice: getMaxPrice(products),
      discount: getDiscount(products),
      categories: []
    },
    formError: false,
    errorMsg: '',
    categoriesList: getCategories(products),
    page: 1,
    products
  }
};

class App extends Component {

  constructor (props) {
    super(props);
    this.state = getInitialState(products);
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
    this.setFromHistory();
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  changePageHandler = (page) => this.setState({page});

  setInitialURL = () => {
    window.history.replaceState(null, null, window.location.pathname);
  }

  setFromHistory = () => {
    const params = window.location.search.slice(1);
    const categories = params === '' ? [] : params.split('&');

    this.setState({
      formFields: {
        ...this.state.formFields,
        categories
      }
    })
  }

  updateHistory = () => {
    const {categories} = this.state.formFields;
    const params = categories.length > 0 ? `?${categories.join('&')}` : window.location.pathname;
    window.history.pushState(null, null, params);
  }

  filterProducts = () => {
    const {formFields: {minPrice, maxPrice, discount, categories}, products} = this.state;

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

  changeFilterFields = ({name, value}) => {
    this.setState({
      formFields: {
        ...this.state.formFields,
        [name]: value
      },
      page: 1
    }, () => this.validateForm());
  }

  changeFilterCategories = (category) => {
    const {categories} = this.state.formFields;
    const itemIndex = categories.findIndex((item) => item === category);

    this.setState({
      formFields: {
        ...this.state.formFields,
        categories: itemIndex !== -1 ?
        [
          ...categories.slice(0, itemIndex),
          ...categories.slice(itemIndex + 1)
        ]
        :
        [...categories, category]
      },
      page: 1
    }, () => this.updateHistory());
  }

  validateForm = () => {
    const [isInvalid, errorMsg] = this.validateFields();

    this.setState({
      formError: isInvalid,
      errorMsg: isInvalid ? errorMsg : ''
    });
  }

  validateFields = () => {
    const {minPrice, maxPrice, discount} = this.state.formFields;
    let error = [false, null];

    if (minPrice > maxPrice) {
      error = [true, 'Минимальная цена выше максимальной'];
      return error;
    }

    if (discount > 100) {
      error = [true, 'Скидка не может быть более 100%'];
      return error;
    }

    return error;
  }

  resetFormFields = () => {
    this.setInitialURL();
    this.setState(getInitialState(products));
  }

  render () {
    const {formFields, formError, errorMsg, categoriesList, page} = this.state;
    const filteredProducts = this.filterProducts(formFields);
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const end = PRODUCTS_PER_PAGE * page;

    return (
      <main>
        <div className="container">
          <div className="product-page">
            <FilterFormContext.Provider value={{
              formFields,
              formError,
              errorMsg,
              categoriesList,
              onResetFormFields: this.resetFormFields,
              onChangeFilterFields: this.changeFilterFields,
              onChangeFilterCategories: this.changeFilterCategories
            }}>
              <ProductFilterForm totalProducts={filteredProducts.length}/>
            </FilterFormContext.Provider>
            <div className="products-section">
              <ProductsList products={filteredProducts.slice(start, end)}/>
              {
                filteredProducts.length > 0 &&
                <Pagination
                  totalProducts={filteredProducts.length}
                  page={page}
                  onChangePage={this.changePageHandler}
                />
              }
            </div>

          </div>
        </div>
      </main>
    )
  }
}

export default App;
