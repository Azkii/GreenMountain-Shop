import React, {useState} from "react"
function HamburgerMenu() {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)
    return (
        <article>
            <div onClick={handleClick} className={click ? 'nochange' : 'change nochange' }>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                <div className={ click ? 'hamburgerMenu-options' : 'hamburgerMenu-options hamburgerMenu-optionsTransition'}>
                    <li className={ click ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition"}>Home</li>
                    <li className={ click ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition"}>About us</li>
                    <li className={ click ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition"}>Products</li>
                </div>
        </article>
        
    )
}
export default HamburgerMenu