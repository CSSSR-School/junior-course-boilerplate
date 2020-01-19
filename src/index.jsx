import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import "./assets/styles/index.scss";

import { Heading } from "components/shared/heading";
import { Grid } from "components/shared/grid";
import { PriceFilter } from "components/price-filter";
import ProductCard from "csssr-school-product-card";
import styled from "./index.module.scss";
import { formatPrice, getMaxMinPrice, memoizeByProps } from "helpers";
import { withLogger } from "hoc";
import { clone } from "ramda";
import { FilterContext } from "context";
import queryString from "query-string";

const Rating = ({ isFilled }) => (isFilled ? "★" : "☆");

const ProductCardWithLogger = withLogger(ProductCard, "ProductCard");

const BASE_STATE = {
  sale: 0,
  categories: [
    { value: false, name: "clothes", label: "Clothes" },
    { value: false, name: "books", label: "Books" }
  ]
};

class App extends PureComponent {
  state = {
    from: 0,
    to: 0,
    min: 0,
    max: 0,
    products: [],
    ...clone(BASE_STATE)
  };

  async componentDidMount() {
    try {
      this.getFromHistory();
      const data = await import("./products.json");
      const products = data.default;
      const { min, max } = getMaxMinPrice(products);

      this.setState({
        products,
        min,
        max,
        from: min,
        to: max
      });
    } catch (err) {
      console.log(err);
    }
  }

  _handleCategory({ name, value }) {
    const categories = this.state.categories.map(cat => {
      if (name === cat.name) {
        return {
          ...cat,
          value
        };
      }

      return cat;
    });

    this.setState({
      categories
    });
  }

  getFromHistory = () => {
    const { search } = window.location;

    console.log(queryString.parse(search));
    return {
      ...queryString.parse(search)
    };
  };

  handleHistoryChange = () => {
    window.history.pushState({ data: "asdsd" }, "title", window.location.href);
  };

  onFilterChange = ({ name, value, type }) => {
    if (type === "checkbox") {
      this._handleCategory({ name, value });
      return;
    }

    this.handleHistoryChange();

    this.setState({
      [name]: Number(value)
    });
  };

  onFilterReset = () => {
    const { min, max } = this.state;
    this.setState({
      from: min,
      to: max,
      ...BASE_STATE
    });
  };

  getProducts = memoizeByProps((products, from, to, sale, categoriesNames) => {
    const filteredProducts = products.filter(
      ({ price, discount, categories }) => {
        const satisfyCategory = categoriesNames.length
          ? categoriesNames.every(cat => categories.includes(cat))
          : true;

        return (
          price >= from &&
          price <= to &&
          discount >= sale / 100 &&
          satisfyCategory
        );
      }
    );

    const formattedProducts = filteredProducts.map(({ price, ...rest }) => ({
      price: formatPrice(price),
      ...rest
    }));

    return formattedProducts;
  });

  render() {
    const { products, ...filterProps } = this.state;

    const { from, to, sale, categories } = filterProps;

    const selectedCategories = categories
      .filter(({ value }) => value)
      .map(({ name }) => name);

    const items = this.getProducts(
      products,
      from,
      to,
      sale,
      selectedCategories
    );

    const contextValue = {
      onChange: this.onFilterChange,
      onReset: this.onFilterReset,
      ...filterProps
    };

    return (
      <div className="app">
        <div className={styled.products}>
          <Heading className={styled.products__title}>Список товаров</Heading>
          <FilterContext.Provider value={contextValue}>
            <PriceFilter />
          </FilterContext.Provider>
          <Grid
            columnsCount={3}
            items={items}
            emptyListPlaceholder="По заданным параметрам ничего не найдено."
            render={props => (
              <ProductCardWithLogger ratingComponent={Rating} {...props} />
            )}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
