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
      [filterName]: value
    }), 500)
  }

  render() {
    return (
      <div style={ filtersContainerStyle }>
        <PriceFilter onChangeFilter={ this.handleFilterChange }/>
      </div>
    )
  }
}

UserFilters.propTypes = {
  onChangeFilter: PropTypes.func
}
export default UserFilters;
