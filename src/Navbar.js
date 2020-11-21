import React from 'react'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
function NavBar(props) {
    return (
        <nav className="page-NavBar">
            <h1 className="logo-Name">Green Mountain.</h1>
            {props.content.mobileSize ? ( 
            <ul className="navBar-Buttons">
                <li className="navBar-Button">Home.</li>
                <li className="navBar-Button">About us.</li>
                <li className="navBar-Button navBar-products">Products.</li>
            </ul> ) : <HamburgerMenu  /> }
        </nav>
    )
}
export default NavBar