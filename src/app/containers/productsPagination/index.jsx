import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './index.module.css';
import { productsPageCountSelector } from '../../store/selectors';

class ProductsPagination extends PureComponent {

  get paginationItems() {
    return Array.from(Array(this.props.pageCount), (item, i) => i + 1)
      .map((item) => {
        return <NavLink
          className={ classnames(styles.item) }
          activeStyle={{
            background: '#5695ED',
            color: '#fff'
          }}
          key={item}
          to={`/list/${item}`}>
            {item}
          </NavLink>
      })
  }

  render() {
    return (
      <div className={ classnames(styles.container)}>
        { this.paginationItems }
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    pageCount: productsPageCountSelector(state)
  }
}

export default connect(mapStateToProps)(ProductsPagination);
