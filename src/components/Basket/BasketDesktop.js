import React from 'react'
function BasketDesktop() {
    return (
        <div className="basket-Box">
           <h1>Shoping Cart</h1>
                <table className="basket-Content">
                    <tbody>
                        <tr className="basket-ContentCategories">
                            <th className="basket-ContentName">Name.</th>
                            <th className="basket-ContentSize">Size.</th>
                            <th className="basket-ContentQunt">Qunatity.</th>
                            <th className="basket-ContentPrice">Price.</th>
                            <th className="basket-ContentRemove">Remove.</th>
                        </tr>
                        <tr className="basket-ContentProduct">
                            <th className="basket-ContentName">Black Tea</th>
                            <th className="basket-ContentSize">
                                <div>S</div>
                            </th>
                            <th className="basket-ContentQunt">
                                <div>-</div>
                                <div>0</div>
                                <div>+</div>
                            </th>
                            <th className="basket-ContentPrice">10 $</th>
                            <th className="basket-ContentRemove">
                                <div>X</div>
                            </th>
                        </tr>
                        <tr className="basket-ContentProduct">
                            <th className="basket-ContentName">Black Tea</th>
                            <th className="basket-ContentSize">
                                <div>S</div>
                            </th>
                            <th className="basket-ContentQunt">
                                <div>-</div>
                                <div>0</div>
                                <div>+</div>
                            </th>
                            <th className="basket-ContentPrice">10 $</th>
                            <th className="basket-ContentRemove">
                                <div>X</div>
                            </th>
                        </tr>
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