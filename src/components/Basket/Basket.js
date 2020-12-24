import React from 'react'
import BasketDesktop from './BasketDesktop'
import BasketMobile from './BasketMobile'
import "./Basket.css"
import "./BasketMobile.css"
function Basket(props) {
    let basket
    if (props.content.mobile ===! true) {
        basket = <BasketMobile content={{setBasket : props.content.setBasket}} />
    }
    else {
        basket = <BasketDesktop content={{setBasket : props.content.setBasket}} />
    }
    return (
        basket
    )
}
export default Basket