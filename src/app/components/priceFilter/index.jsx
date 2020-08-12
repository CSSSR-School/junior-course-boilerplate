import PropTypes from 'prop-types';
import React from 'react';
import debounce from 'lodash-es/debounce';

import BaseComponent from '../baseComponent/index';

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
  constructor(props) {
    super(props);
    this.handleControlChange = debounce(this.handleControlChange.bind(this), 500)
  }

  handleControlChange(filterName, value) {
    this.props.onChangeFilter(filterName, value);
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
                  defaultValue={ this.props.minPrice }
                  onChange={(event)=> this.handleControlChange('minPrice', parseInt(event.target.value, 10))}/>
          </label>

          <label style={ labelStyle }>
            <span style={ labelTitleStyle }>До:</span>
            <input style={ inuputStyle }
                  type="text"
                  defaultValue={ this.props.maxPrice }
                  onChange={(event)=> this.handleControlChange('maxPrice', parseInt(event.target.value, 10))}/>
          </label>
        </div>
      </div>
    )
  }
}

PriceFilter.propTypes = {
  onChangeFilter: PropTypes.func,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number
}
export default PriceFilter
