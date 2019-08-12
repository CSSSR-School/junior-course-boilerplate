import React from 'react'
import './Header.css'

const Header = ({headerName}) => {
    return (
        <h1 className="goodsList">{headerName}</h1>
    );
}
export default Header