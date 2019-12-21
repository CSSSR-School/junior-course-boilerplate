import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/index.scss";

import data from "./products.json";
import { Heading } from "components/shared/heading";
import { Grid } from "components/shared/grid";
import { PriceFilter } from "components/price-filter";
import ProductCard from "csssr-school-product-card";
import styled from "./index.module.scss";

const Rating = ({ isFilled }) => (isFilled ? "★" : "☆");

function App() {
  return (
    <div className="app">
      <div className={styled.products}>
        <PriceFilter />
        <Heading className={styled.products__title}>Список товаров</Heading>
        <Grid
          columnsCount={3}
          items={data}
          render={props => <ProductCard ratingComponent={Rating} {...props} />}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
