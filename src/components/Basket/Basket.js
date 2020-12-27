import React from 'react'
import BasketDesktop from './BasketDesktop'
import BasketMobile from './BasketMobile'
import "./Basket.css"
import "./BasketMobile.css"
function Basket(props) {
    let basket
    if (props.content.mobile ===! true) {
        basket = <BasketMobile content={{setShowIconBasket : props.content.setShowIconBasket}} />
    }
    else {
        basket = <BasketDesktop content={{setShowIconBasket : props.content.setShowIconBasket}} />
    }
    return (
        basket
    )
}
export default Basket