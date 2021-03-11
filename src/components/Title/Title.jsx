import React from 'react';
import pt from 'prop-types';
import s from './Title.module.css';
import LogRender from '../LogRender/LogRender';

class Title extends LogRender {
  render() {
    const {children} = this.props;
    return (
      <h1 className={s.title}>{children}</h1>
    )
  }
}

Title.propTypes = {
  children: pt.node.isRequired
};

export default Title;
