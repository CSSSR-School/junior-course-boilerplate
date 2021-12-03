import React from 'react';
import './MainTitle.css'
import reactMixin from 'react-mixin';
import logRender from '../logRender/logRender';



const MainTitle = ({title}) => {
  return (
    <h1 className="title">{title}</h1>
  )
}

reactMixin(MainTitle.prototype, logRender);

export default MainTitle

