import React from 'react';

import LogRender from '../LogRender/LogRender';

import './FilterForm.css';

class ProductFieldset extends LogRender {
  render() {
    return (
      <form className="filter-form">
        {this.props.children}
      </form>
    );
  }
}

export default ProductFieldset;
