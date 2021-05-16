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

  render() {
    return (
      <fieldset className="filter-fieldset">
        <InputDiscountWithMask
          title="Скидка"
          name="sale"
          onChange={ this.props.handleDiscountChange }
          defaultValue={ this.defaultValue }
          value={ this.props.discount }
        />
      </fieldset>
    );
  }
}

DiscountFieldset.propTypes = {
  discount: PropTypes.number.isRequired,
  handleDiscountChange: PropTypes.func.isRequired,
}

export default DiscountFieldset;
