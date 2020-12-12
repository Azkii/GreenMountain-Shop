import React from 'react'
function Product(props) {
    return (
        <div className="allProducts-ProductBox">
            <img src={props.product.image}></img>
            <p>{props.product.name}</p>
            <p>{props.product.price[0]} $</p>
            <div className="allProducts-Buttons">
                <button>Details.</button>
                <button>Add to card.</button>
            </div>
        </div>
    )
}
export default Product