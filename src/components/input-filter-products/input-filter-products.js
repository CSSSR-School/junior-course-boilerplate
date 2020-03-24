import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './input-filter-products.scss';
import { logRender } from '../../utils/log-render';

class InputFilterProducts extends Component {
  render() {
    const { name, defaultValue } = this.props;
    return (
      <input
        className={classnames(
          'filter-products__input',
          'input-filter-products'
        )}
        type="number"
        name={name}
        defaultValue={defaultValue}
      />
    );
  }
}

InputFilterProducts.propTypes = {
  name: propTypes.string,
  defaultValue: propTypes.number
};

logRender(InputFilterProducts);
export default InputFilterProducts;
