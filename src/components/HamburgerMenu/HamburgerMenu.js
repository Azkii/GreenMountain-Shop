import React, {useState} from "react"
import iconFacebook from '../../Photos/icons/facebookBlack.svg'
import iconTwitter from '../../Photos/icons/twitterBlack.svg'
import iconYoutube from '../../Photos/icons/youtubeBlack.svg'
function HamburgerMenu(props) {
    const [adam, setAdam] = useState(true)
    const [click, setClick] = useState(true)
    const handleClick = () => {
        setClick(!click)
        if (click === true) {
            document.body.style.overflow = "hidden"
            setTimeout(function(){ setAdam(!adam) }, 0)
        }
        else if (click === false) {
            document.body.style.overflow = ""
            setTimeout(function(){ setAdam(!adam) }, 0)
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
                    <div className={ adam ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition" } onClick={props.content.scrollToHomePage} >Home</div>
                    <div className={ adam ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition" } onClick={props.content.scrollToAboutUs} >About us</div>
                    <div className={ adam ? "hamburgerMenu-option" : "hamburgerMenu-option hamburgerMenu-optionTransition" } onClick={props.content.scrollToProducts} >Products</div>
                    <ul className={ adam ? "hamburger-iconsList" : "hamburger-iconsList hamburger-iconsListTransition"}>
                        <li><img src={iconFacebook}></img></li>
                        <li><img src={iconTwitter}></img></li>
                        <li><img src={iconYoutube}></img></li>
                    </ul>
                </div>
        </article>
        
    )
}
export default HamburgerMenu