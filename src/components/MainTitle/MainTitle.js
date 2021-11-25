import React from 'react';
import './MainTitle.css'

export default class MainTitle extends React.Component {
  render() {
    return <h1 className="title">{this.props.title}</h1>
  }
}

