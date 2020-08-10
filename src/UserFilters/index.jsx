import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from '../BaseComponent/index';
import PriceFilter from '../PriceFilter/index';

const filtersContainerStyle = {
  padding: '4px 16px'
}

class UserFilters extends BaseComponent {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(changes) {
    const { filterName, value } = changes;

    setTimeout(() => this.props.onChangeFilter({
      ...this.props.filters,
      [filterName]: value
    }), 500)
  }

  render() {
    return (
      <div style={ filtersContainerStyle }>
        <PriceFilter
          minPrice={ this.props.filters.minPrice }
          maxPrice={ this.props.filters.maxPrice }
          onChangeFilter={ this.handleFilterChange }/>
      </div>
    )
  }
}

UserFilters.propTypes = {
  filters: PropTypes.shape({
    minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  onChangeFilter: PropTypes.func
}
export default UserFilters;
