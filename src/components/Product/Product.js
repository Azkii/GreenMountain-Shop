import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
function Product(props) {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)
    //Product start
    let contnet = <div className="Wraped-Product">
                        <div onMouseEnter={handleClick} onMouseLeave = {handleClick} className={click ? "product-Container" : "product-ContainerHover product-Container" }>
                            <img className="product-photo" src={props.product.image} alt="Tea-example"/>
                            <h2 className="product-name">{props.product.name}</h2>
                            <p className="product-price">{props.product.price[0]}$</p>
                            {click ? "" : ( 
                                <div className={click ? "HoverDetails" : "HoverDetails HoverDetails2"}>
                                    <Link to={`/product/${props.product.name + props.product.id}`}>
                                        <button className="hoverDetails-Discover">
                                            Discover
                                        </button>
                                    </Link>
                                    <button className="hoverDetails-Checkout">
                                        ADD TO CARD
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
//Product END
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
export default Product