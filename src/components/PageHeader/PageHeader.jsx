import React from 'react';

import LogRender from '../LogRender/LogRender';

import './PageHeader.css'

class PageHeader extends LogRender {
  render() {
    return (
      <header>
        <h1 className="page-title">
          Список товаров
        </h1>
      </header>
    );
  }
};

export default PageHeader;
