import React from 'react';
import data from './products.json';
import './app.css';

// Импорт глупых компонентов
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';

// Импорт умных компонентов
import { ProductPage } from './containers/ProductPage';

const HEADER_TITLE = `Список товаров`;

export const App = () => {
  return (
    <Container>
      <Header title={HEADER_TITLE} />
      <ProductPage products={data} />
    </Container>
  );
};
