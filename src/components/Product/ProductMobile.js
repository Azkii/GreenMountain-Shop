import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './ProductMobile.css'
function ProductMobile(props) {
    const [hover, setHover] = useState(true)
    return (
        <div 
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
            className="productMobile-box"
        >
            <img src={props.product.image}></img>
            <h1>{props.product.name}</h1>
            <p>{props.product.price[0]}$</p>
            <div className={hover ? "productMobile-HoverDetailsOFF" : "productMobile-HoverDetailsON"}>
                <div className="productMobile-Buttons">
                    <Link to={`/product/${props.product.name + props.product.id}`}>
                        <button className="productMobile-Details productMobile-Button">Details.</button>
                    </Link>
                    <button className="productMobile-Cart productMobile-Button">Add to cart.</button>
                </div>
            </div>
        </div>
    )
}
export default ProductMobile