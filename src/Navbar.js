import React from 'react'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
function NavBar(props) {
    return (
        <div className="dummyNavbar-Container">
        <nav className="page-NavBar">
            <h1 className="logo-Name">Blue Mountain.</h1>
            {props.content.mobileSize ? ( 
            <ul className="navBar-Buttons">
                <li className="navBar-Button">Home.</li>
                <li className="navBar-Button">About us.</li>
                <li className="navBar-Button navBar-products">Products.</li>
            </ul> ) : <HamburgerMenu  /> }
        </nav>
        </div>
    )
}
export default NavBar