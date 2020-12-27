import React,{useState} from 'react'
import { Link } from 'react-router-dom'
function Product(props) {
    const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)
    const BuyFunction = () => {
        const dataPush = props.product.name + props.product.id + props.product.sizes[0]
        var basketItem = [
            props.product.id,
            props.product.name,
            props.product.sizes[0],
            props.product.price[0],
        ]
        var existing = localStorage.getItem(dataPush)
        existing = existing ? existing.split(',') : [];
        existing.push(basketItem);
        localStorage.setItem(dataPush, existing.toString());
    }
    //Product start
    let contnet =
        <div className="allProducts-dummyBox">
            <div className="allProducts-ProductBox" onMouseEnter={handleClick} onMouseLeave = {handleClick} >
                <img src={props.product.image}></img>
                <p>{props.product.name}</p>
                <p>{props.product.price[0]} $</p>
                <div className={click ? "allProducts-Buttons" : "allProducts-Buttons allProducts-ButtonsHovered"}>
                    <Link to={`/product/${props.product.name + props.product.id}`}>
                    <button className="allProduct-ButtonDetails" >Details.</button>
                    </Link>
                    <button onClick={BuyFunction}>Add to card.</button>
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