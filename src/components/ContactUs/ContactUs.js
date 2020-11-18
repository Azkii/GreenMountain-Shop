import React from 'react'
import './ContactUs.css'
import IconMail from '../../Photos/icons/mail.svg'
import IconMapMark from '../../Photos/icons/mapMark.svg'
import IconPhone from '../../Photos/icons/phone.svg'
function ContactUs() {
    return (
        <div className="contactUs-Container">
            <div className="contactUs-ContentBox">
                <h3>GET. IN. TOUCH.</h3>
                <div className="contactUs-ContentText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque orci non pretium porta. Integer luctus, justo id fermenamet mi luctus euismod. Fusce at aliquet mi. Sed pellentesque orci non pretium porta.
                </div>
                <ul className="contactUs-ContactOptions">
                    <li className="contactUs-ContactOption">
                        <img src={IconMail} alt="mail"></img>
                        <p>Email@email.com</p>
                    </li>
                    <li className="contactUs-ContactOption">
                        <img src={IconPhone} alt="mail"></img>
                        <p>220 220</p>
                    </li>
                    <li className="contactUs-ContactOption">
                        <img src={IconMapMark} alt="mail"></img>
                        <p>2 Chome-24-1 Dogenzaka, Shibuya City</p>
                    </li>
                </ul>
            </div>
            <div className="contactUs-Form">
                <div>
                    <h4>
                        SAY SOMETHING
                    </h4>
                    <input type="text" className="contactUs-InputInfo" placeholder="Your name."></input>
                    <input type="text" className="contactUs-InputInfo" placeholder="Your email."></input>
                    <textarea className="contactUs-InputMessage" placeholder="Message..."></textarea>
                    <button>SEND</button>
                </div>
            </div>
        </div>
    )
}
export default ContactUs