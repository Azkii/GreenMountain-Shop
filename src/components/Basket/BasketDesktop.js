import React from 'react'
import ExitIcon from '../../Photos/icons/exitBlue.svg'
import ProductBasket from './BasketElementDesktop'
function BasketDesktop(props) {
    var objects = Object.values(localStorage);
    console.log(objects)
    const productBasket = objects.map(product =>
        <ProductBasket
            key={product.id}
            product={product}
        />)
    return (
        <div className="basket-Box">
           <img className="basket-ExitButton" src={ExitIcon} onClick={() => {props.content.setBasket(false); document.body.style.overflow = "" }} />
           <h1>Shoping Cart.</h1>
                <table className="basket-Content">
                    <tbody>
                        <tr className="basket-ContentCategories">
                            <th className="basket-ContentName">Name.</th>
                            <th className="basket-ContentSize">Size.</th>
                            <th className="basket-ContentQunt">Qunatity.</th>
                            <th className="basket-ContentPrice">Price.</th>
                            <th className="basket-ContentRemove">Remove.</th>
                        </tr>
                        {productBasket}
                    </tbody>
                </table>
           <ul className="basket-Info">
               <li>Discount: 00$</li>
               <li>Delivery price: 00$</li>
               <li>Product price: 00$</li>
               <li>Total: 00$</li>
           </ul>
           <div className="basket-Checkout">
               <div>
                   <input type="text" placeholder="Your disscount code."></input>
                   <button>Apply Discount</button>
               </div>
               <button className="basket-CheckoutButton">Checkout</button>
           </div>
        </div>
    )
}
export default BasketDesktop