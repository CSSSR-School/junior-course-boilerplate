import PropTypes from 'prop-types';
import React from 'react';

import BaseComponent from '../BaseComponent/index';

const filterTitleStyle = {
  marginBottom: '8px',
  fontSize: '20px',
  fontWeight: 700
}

const labelStyle = {
  marginRight: '16px'
}

const labelTitleStyle = {
  marginRight: '8px'
}

const inuputStyle ={
  width: '6em'
}

class PriceFilter extends BaseComponent {

  handleControlChange(filterName, value) {
    setTimeout(() => this.props.onChangeFilter({
      filterName,
      value
    }), 500);
  }

  render() {
    return (
      <div>
        <div style={ filterTitleStyle }>
          <span>Цена</span>
        </div>
        <div>
          <label style={ labelStyle }>
            <span style={ labelTitleStyle }>От:</span>
            <input style={ inuputStyle }
                  type="text"
                defaultValue={ this.props.minPrice || 0 }
                onChange={(event)=> this.handleControlChange('minPrice', parseInt(event.target.value, 10))}/>
          </label>

          <label style={ labelStyle }>
            <span style={ labelTitleStyle }>До:</span>
            <input style={ inuputStyle }
                  type="text"
                defaultValue={ this.props.maxPrice || 0 }
                onChange={(event)=> this.handleControlChange('maxPrice', parseInt(event.target.value, 10))}/>
          </label>
        </div>
      </div>
    )
  }
}

PriceFilter.propTypes = {
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeFilter: PropTypes.func
}
export default PriceFilter
