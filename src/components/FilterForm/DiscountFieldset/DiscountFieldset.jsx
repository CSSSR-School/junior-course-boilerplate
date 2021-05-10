import React from 'react';
import PropTypes from 'prop-types';
import InputDiscount from 'csssr-school-input-discount';

import LogRender from '../../LogRender/LogRender';
import { AppContext } from '../../App/App';

import { withNumberMask } from '../../../hocs/withNumberMask';

const InputDiscountWithMask = withNumberMask(InputDiscount);

class DiscountFieldset extends LogRender {
  handleDiscountChange = (discount) => {
    this.props.onChange(discount);
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ discount }) => (
          <fieldset className="filter-fieldset">
            <InputDiscountWithMask
              title="Скидка"
              name="sale"
              onChange={ this.handleDiscountChange }
              defaultValue={ this.props.defaultValue }
              value={ discount }
            />
          </fieldset>
        )}
      </AppContext.Consumer>
    );
  }
}

DiscountFieldset.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default DiscountFieldset;
