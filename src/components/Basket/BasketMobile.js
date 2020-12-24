import React from 'react'
import ExitIcon from '../../Photos/icons/exitWhite.svg'
import BasketIcon from '../../Photos/icons/basketIcon.svg'
function BasketMobile(props) {
    return (
        <div className="basketMobile-Box">
            <div className="basketMobile-ExitButton" onClick={() => {props.content.setBasket(false); document.body.style.overflow = ""}}>
                <img src={ExitIcon} />
            </div>
            <h1>Shoping Cart.</h1>
            <ul className="basketMobile-Product">
                <li className="basketMobile-Photo"><img src="https://moyamatcha.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/03/Zielona-herbata-Moya-Matcha-Tradycyjna-30g-1-510x510.jpg.webp"></img></li>
                <li className="basketMobile-ProductInfo">
                        <div className="basketMobile-ProductInfoName">Black Tea</div>
                    <div className="basketMobile-ProductPrice">Price: 20 $</div>
                </li>
                <div className="basketMobile-ProductAmount1">
                            <p>+</p>
                            <p>1</p>
                            <p>-</p>
                </div>
            </ul>
            <ul className="basketMobile-Product">
                <li className="basketMobile-Photo"><img src="https://moyamatcha.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2016/03/Zielona-herbata-Moya-Matcha-Tradycyjna-30g-1-510x510.jpg.webp"></img></li>
                <li className="basketMobile-ProductInfo">
                        <div className="basketMobile-ProductInfoName">Black Tea</div>
                    <div className="basketMobile-ProductPrice">Price: 20 $</div>
                </li>
                <div className="basketMobile-ProductAmount1">
                            <p>+</p>
                            <p>1</p>
                            <p>-</p>
                </div>
            </ul>
            <div className="basketMobile-Checkout">
                <button className="basketMobile-CheckoutButton">
                    <p>Checkout.</p>
                    <img src={BasketIcon} alt="Shoping Basket Icon"></img>
                </button>
                <div className="basketMobile-CheckoutPrice">Total Price: 00$</div>
            </div>
        </div>
    )
}
export default BasketMobile