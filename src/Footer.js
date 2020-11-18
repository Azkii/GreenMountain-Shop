import React from 'react'
import iconFacebook from './Photos/icons/facebook.svg'
import iconTwitter from './Photos/icons/twitter.svg'
import iconYoutube from './Photos/icons/youtube.svg'
function Footer() {
    return (
        <div className="footer-ContainerDummy">
            <footer>
                <h1>GREEN MOUNTAIN.</h1>
                <div className="footer-DescSection">
                    <div className="footer-DescText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ultricies mi. Curabitur in imperdiet nibh, eu pharetra risus. Sed eget molestie massa. Nunc ac aliquet ipsum. 
                    </div>
                    <div className="footer-DescAboutUs">
                        <h4>ABOUT US</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ultricies mi. Curabitur in imperdiet nibh, eu pharetra risus.In lobortis tellus semper, varius lacus sodales, convallis tellus.</p>
                    </div>
                    <div className="footer-DescLinks">
                        <img src={iconFacebook}></img>
                        <img src={iconTwitter}></img>
                        <img src={iconYoutube}></img>
                    </div>
                </div>
                    <ul className="footer-LinkSections">
                        <li>Home.</li>
                        <li>Products.</li>
                        <li>ContactUs.</li>
                        <li>F.A.Q.</li>
                    </ul>
            </footer>
        </div>
    )
}
export default Footer