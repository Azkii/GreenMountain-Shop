import React,{useState} from 'react'
import './Product.css'
function Product(props) {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)
    //Product start
    let contnet = <div className="Wraped-Product">
                        <div onMouseEnter={handleClick} onMouseLeave = {handleClick} className={click ? "product-Container" : "product-ContainerHover product-Container" }>
                            <img className="product-photo" src={props.product.image} alt="Tea-example"/>
                            <h2 className="product-name">{props.product.name} Tea</h2>
                            <p className="product-price">{props.product.price[0]}$~{props.product.price[2]}$</p>
                            {click ? "" : ( 
                                <div className={click ? "HoverDetails" : "HoverDetails HoverDetails2"}>
                                    <button className="hoverDetails-Discover">
                                        Discover
                                    </button>
                                    <button className="hoverDetails-Checkout">
                                        ADD TO CARD
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
//Product END
        if(props.content.catBlackTea === true) {
            console.log("display only black tea")
            if (props.product.type === "black-tea") {
                
            }
            else {
                contnet = ""
            }
        }
    return (
        contnet
    )
}
export default Product