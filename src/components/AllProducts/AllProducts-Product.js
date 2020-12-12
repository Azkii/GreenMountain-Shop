import React,{useState} from 'react'
function Product(props) {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)
    //Product start
    let contnet =
        <div className="allProducts-dummyBox">
            <div className="allProducts-ProductBox" onMouseEnter={handleClick} onMouseLeave = {handleClick} >
                <img src={props.product.image}></img>
                <p>{props.product.name}</p>
                <p>{props.product.price[0]} $</p>
                <div className={click ? "allProducts-Buttons" : "allProducts-Buttons allProducts-ButtonsHovered"}>
                    <button>Details.</button>
                    <button>Add to card.</button>
                </div>
            </div>
        </div>
    //Product end
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