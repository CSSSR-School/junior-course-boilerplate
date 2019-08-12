import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <h1 className="goodsList">
            {props.children}
        </h1>
    );
}
export default Header