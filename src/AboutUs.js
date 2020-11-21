import React from 'react'
import ContactUs from './components/ContactUs/ContactUs'
function AboutUs(props) {
    return (
        <article className="aboutUsContainer">
            <div className="aboutUs-Title">
                <p>OUR CAMPANY.</p>
                <p>|</p>
                <p>INFORMATIONS.</p>
            </div>
            <div className="aboutUs-Background">
                <h1>OUR. COMPANY.</h1>
            </div>
            <div className="aboutUs-ContentBox">
                <h2>THE. BUISNESS. OF. BEST. TEA.</h2>
                <div className="aboutUs-ContentText">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque orci non pretium porta. Integer luctus, justo id fermenamet mi luctus euismod. Fusce at aliquet mi. Suspendisse vel neque vitae ante tempus faucibus. Maecenas varius, justo sit amet placerat elementum, augue lectus elementum nunc, eu rutrum magna neque feugiat diam.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque orci non pretium porta. Integer luctus, justo id fermentum lobortis, neque lectus euismod arcu, at bibendum nunc enim ut lac faucibus. Maecenas varius, justo sit amet placerat.
                    </div>
                </div>
            </div>
            <ContactUs content= {{mobileSize : props.content.mobileSize }} />
        </article>
    )
}
export default AboutUs