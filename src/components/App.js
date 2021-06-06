import React from "react";
import { Container, List, Title } from "./general";
import products from "../products.json";

export const App = () => (
  <Container>
    <Title text="Список товаров" />
    <List>
      {products.map(item => (
        <List.Item key={item.id} text={item.name} />
      ))}
    </List>
  </Container>
);
