import React from 'react'
import ExitIcon from '../../Photos/icons/exitWhite.svg'
import BasketIcon from '../../Photos/icons/basketIcon.svg'
import ProductBasket from './BasketElementMobile'
import {Link} from 'react-router-dom'
function BasketMobile(props) {
    var objects = Object.values(localStorage);
    const productBasket = objects.map(product =>
        <ProductBasket
            key = {product}
            product={product}
        />)
    return (
        <div className="basketMobile-Box">
            <Link to="/">
                <div className="basketMobile-ExitButton">
                    <img src={ExitIcon} onClick={() => {props.content.setShowIconBasket(true)}} />
                </div>
            </Link>
            <h1>Shoping Cart.</h1>
            <div className="basketMobile-ProductList">
                {productBasket}
            </div>
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