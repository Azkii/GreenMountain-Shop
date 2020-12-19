import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './ProductMobile.css'
function ProductMobile(props) {
    const [hover, setHover] = useState(true)
/*Content*/
    let contnet = 
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
/*end of content*/
    if(props.content.catBlackTea === true || props.content.catGreenTea === true || props.content.catOolongTea === true || props.content.catWhiteTea === true) {
        if (props.content.catBlackTea === false) {
            if (props.product.type === "black-tea") {
                contnet = ""
            }
        }
        if (props.content.catGreenTea === false) {
            if (props.product.type === "green-tea") {
                contnet = ""
            }
        }
        if (props.content.catOolongTea === false) {
            if (props.product.type === "oolong-tea") {
                contnet = ""
            }
        }
        if (props.content.catWhiteTea === false) {
            if (props.product.type === "white-tea") {
                contnet = ""
            }
        }
    }
    return (
        contnet
    )
}
export default ProductMobile