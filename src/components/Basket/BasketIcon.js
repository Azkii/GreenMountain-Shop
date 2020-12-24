import React from 'react'
import Basket from '../../Photos/icons/basketIcon.svg'
function BasketIcon(props) {
    return (
        <div className="BasketIcon-box" onClick={() => {props.content.setBasket(!props.content.showBasket); document.body.style.overflow = "hidden"}}>
            <img src={Basket}></img>
        </div>
    )
}
export default BasketIcon