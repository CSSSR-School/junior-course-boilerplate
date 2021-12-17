import React from 'react';
import './Categories.css';
import { BaseContext } from '../BaseContext/BaseContext';

class Categories extends React.Component {

  // handleChange = (event) => {
  //   const { value } = event.target
  //   this.props.categoryChangeState(value)
  // }

  render() {
    return (
      <BaseContext.Consumer>
        {(categoryChangeState) => (
          <div className="aside-block categories-block">
            <h3 className="aside-block__title">Категории</h3>
            <div className="aside-block__row">
              <button className="categories-block__switch-btn" onClick={categoryChangeState} value='clothes'>Clothes</button>
              <button className="categories-block__switch-btn" onClick={categoryChangeState} value='books'>Books</button>
            </div>
            <button className="categories-block__btn" onClick={categoryChangeState} value=''>Сбросить фильтры</button>
          </div>
        )
        }
      </BaseContext.Consumer>
    )
  }
}

export default Categories
