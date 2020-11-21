import React, {useState} from "react"
import iconFacebook from '../../Photos/icons/facebookBlack.svg'
import iconTwitter from '../../Photos/icons/twitterBlack.svg'
import iconYoutube from '../../Photos/icons/youtubeBlack.svg'
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
                    <div className={ click ? "hamburgerMenu-option" : "hamburgerMenu-option" }>Home</div>
                    <div className={ click ? "hamburgerMenu-option" : "hamburgerMenu-option" }>About us</div>
                    <div className={ click ? "hamburgerMenu-option" : "hamburgerMenu-option" }>Products</div>
                    <ul className="hamburger-iconsList">
                        <li><img src={iconFacebook}></img></li>
                        <li><img src={iconTwitter}></img></li>
                        <li><img src={iconYoutube}></img></li>
                    </ul>
                </div>
        </article>
        
    )
}
export default HamburgerMenu