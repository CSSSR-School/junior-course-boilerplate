import React from 'react';

import LogRender from '../LogRender/LogRender';

import './PageHeader.css'

class PageHeader extends LogRender {
  render() {
    return (
      <header className="page-header">
        <h1 className="page-header__title">
          Список товаров
        </h1>
      </header>
    );
  }
};

export default PageHeader;
