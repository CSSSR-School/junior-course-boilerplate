import React from 'react';
import InputDiscount from 'csssr-school-input-discount';

import LogRender from '../../LogRender/LogRender';

class DiscountFieldset extends LogRender {
  state = { value: 0 };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <fieldset className="filter-fieldset">
        <InputDiscount
          title="Скидка"
          name="sale"
          value={this.state.value}
          onChange={ this.handleChange }
        />
      </fieldset>
    );
  }
}

export default DiscountFieldset;
