import React from 'react';
import { logger } from 'csssr-school-utils';

// Исходя из постановки задания мне совершенно не понятно,
// как этот компонент должен быть реализован.
// Мне нужно переписать всё обратно на классы
// и заэкстендить каждым классом logRender ?
export const logRender = (Component) => {
  return class extends React.Component {
    shouldComponentUpdate(nextProps) {
      logger.call(this, Component.name, nextProps);
      return true
    }

    render() {
      return <Component {...this.props}/>
    }
  }
}
