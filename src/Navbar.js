import React, { useState } from 'react'
import HamburgerMenu from './components/HamburgerMenu'
function NavBar() {
    const [showBurger, setBurger] = useState(true);
    const showNavBarMenu = () => {
        if (window.innerWidth <= 1000) {
            setBurger(false)
        }
        else {
            setBurger(true)
        }
    }
    window.addEventListener('load', showNavBarMenu);
    window.addEventListener('resize', showNavBarMenu);
    return (
        <nav className="page-NavBar">
            <h1 className="logo-Name">Green Mountain.</h1>
            {showBurger ? ( 
            <ul className="navBar-Buttons">
                <li className="navBar-Button">Home</li>
                <li className="navBar-Button">About us</li>
                <li className="navBar-Button navBar-products">Products</li>
            </ul> ) : <HamburgerMenu  /> }
        </nav>
    )
}
export default NavBar