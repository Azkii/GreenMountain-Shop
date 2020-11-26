import React,{useState} from 'react'
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
function NavBar(props) {
    const [showBurger, setBurger] = useState(true);
    const showNavBarMenu = () => {
        if (window.innerWidth <= 1000) {
            setBurger(false)
        }
        else {
            setBurger(true)
            document.body.style.overflow = ""
        }
    }
    window.addEventListener('load', showNavBarMenu);
    window.addEventListener('resize', showNavBarMenu);

    return (
        <div className="dummyNavbar-Container">
        <nav className="page-NavBar">
            <h1 className="logo-Name">Blue Mountain.</h1>
            {showBurger ? ( 
                <ul className="navBar-Buttons">
                    <li className="navBar-Button" onClick = {props.content.scrollToHomePage}>Home.</li>
                    <li className="navBar-Button" onClick = {props.content.scrollToAboutUs}>About us.</li>
                    <li className="navBar-Button navBar-products" onClick = {props.content.scrollToProducts}>Products.</li>
                </ul> 
            ):
                <HamburgerMenu 
                    content={{
                        scrollToHomePage : props.content.scrollToHomePage,
                        scrollToAboutUs : props.content.scrollToAboutUs,
                        scrollToProducts : props.content.scrollToProducts,
                    }}
                />}
        </nav>
        </div>
    )
}
export default NavBar