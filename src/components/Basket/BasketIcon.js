import React from 'react'
import Basket from '../../Photos/icons/basketIcon.svg'
function BasketIcon(props) {
    console.log(props.content.showIconBasket)
    return (
        <div>
            {props.content.showIconBasket ? 
            <div className="BasketIcon-box" onClick={() => {props.content.setShowIconBasket(false)} }>
                <img src={Basket}></img>
            </div> : "" }
        </div>
    )
}
export default BasketIcon