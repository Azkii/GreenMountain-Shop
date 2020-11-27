import React, {useState} from "react"
import iconFacebook from '../../Photos/icons/facebookBlack.svg'
import iconTwitter from '../../Photos/icons/twitterBlack.svg'
import iconYoutube from '../../Photos/icons/youtubeBlack.svg'
function HamburgerMenu(props) {
    const [animateNav, setanimateNav] = useState(true)
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(!click)
        if (click === true) {
            document.body.style.overflow = "hidden"
            setTimeout(function(){ setanimateNav(!animateNav) }, 0)
        }
        else if (click === false) {
            document.body.style.overflow = ""
            setTimeout(function(){ setanimateNav(!animateNav) }, 0)
        }
    }
    return (
        <article>
            <div onClick={handleClick} className={click ? 'nochange' : 'change nochange' }>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
                <div className={ click ? 'hamburgerMenu-options' : 'hamburgerMenu-options hamburgerMenu-optionsTransition'}>
                    <div className={ animateNav ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition" } onClick={ () => {props.content.scrollToHomePage(); handleClick() }} >Home</div>
                    <div className={ animateNav ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition" } onClick={ () => {props.content.scrollToAboutUs(); handleClick() }} >About us</div>
                    <div className={ animateNav ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition" } onClick={ () => {props.content.scrollToProducts(); handleClick() }} >Products</div>
                    <ul className={ animateNav ? "hamburger-iconsList" : "hamburger-iconsList hamburger-iconsListTransition"}>
                        <li><img src={iconFacebook} alt="facebook-icon"></img></li>
                        <li><img src={iconTwitter} alt="twitter-icon"></img></li>
                        <li><img src={iconYoutube} alt="youtube-icon"></img></li>
                    </ul>
                </div>
        </article>
        
    )
}
export default HamburgerMenu