import React from 'react'
import './Product.css'
function Product(props) {
    return (
        <div className="product-Container">
            <img className="product-photo" src={props.product.image} />
            <h2 className="product-name">{props.product.name} Tea</h2>
            <p className="product-price">{props.product.price[0]}$~{props.product.price[2]}$</p>
        </div>
    )
}
export default Product