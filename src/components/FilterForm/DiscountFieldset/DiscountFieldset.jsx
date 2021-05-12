import React from 'react';
import PropTypes from 'prop-types';
import InputDiscount from 'csssr-school-input-discount';

import LogRender from '../../LogRender/LogRender';

import { withNumberMask } from '../../../hocs/withNumberMask';

const InputDiscountWithMask = withNumberMask(InputDiscount);

class DiscountFieldset extends LogRender {
  constructor(props) {
    super(props);
    this.defaultValue = props.discount;
  }
  handleDiscountChange = (discount) => {
    this.props.onChange(discount);
  }

  render() {
    return (
      <fieldset className="filter-fieldset">
        <InputDiscountWithMask
          title="Скидка"
          name="sale"
          onChange={ this.handleDiscountChange }
          defaultValue={ this.defaultValue }
          value={ this.props.discount }
        />
      </fieldset>
    );
  }
}

DiscountFieldset.propTypes = {
  discount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default DiscountFieldset;
