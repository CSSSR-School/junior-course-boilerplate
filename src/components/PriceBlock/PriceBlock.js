import React from 'react';
import './PriceBlock.css';
import logRender from '../logRender/logRender';

class PriceBlock extends logRender {
    constructor(props) {
      super(props);
      this.inputMinRef = React.createRef();
      this.inputMaxRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleChangeState(this.inputMinRef.current.value,this.inputMaxRef.current.value);
  }

  render() {
    return (
        <form className="price-block" onSubmit={this.handleSubmit}>
          <span className="price-block__title">Цена</span>
          <div className="price-block__row">
            <label className="price-block__label">от</label>
            <input type="text" className="price-block__input" ref={this.inputMinRef} defaultValue={this.props.inputMinValue}/>
            <label className="price-block__label">до</label>
            <input type="text" className="price-block__input" ref={this.inputMaxRef} defaultValue={this.props.inputMaxValue} />
          </div>
          <button className="price-block__btn">Применить</button>
        </form>
    );
  }
}

export default PriceBlock
