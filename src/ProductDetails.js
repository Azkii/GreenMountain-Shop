import {Link} from 'react-router-dom'
import iconArrow from './Photos/icons/arrow.svg'
import React, {useState} from 'react'

function ProductDetails(props) {
    const [count, setCount] = useState(0);
    let small = true
    let medium = false
    let big = false
    function test() {
        if (count === 0) {
            small = true
            medium = false
            big = false
        }
        if (count === 1) {
            medium = true
            small = false
            big = false
        }
        if (count === 2) {
            big = true
            medium = false
            small = false
        }
        else {
            small = true
        }
    }
/*Import*/
  let content = <div className="productDetails-MainContainer">
                <Link to="/">
                <img className="productDetails-BackButton" src={iconArrow} alt="arrowSign" />
                </Link>
                <div className="productDetails-Box">
                    <div className="productDetails-Photos">
                        <div className="productDetails-Gallery">
                            <img src={props.product.image} alt="Green tea"></img>
                            <img src={props.product.image} alt="Green tea"></img>
                            <img src={props.product.image} alt="Green tea"></img>
                        </div>
                        <div className="productDetails-PhotoDis">
                            <img src={props.product.image} alt="Green tea"></img>
                        </div>
                    </div>
                    <div className="productDetails-Content">
                        <section>
                            <div className="productDetails-Rating" >
                                <ul>
                                    <li> &#9733; </li>
                                    <li> &#9733; </li>
                                    <li> &#9733; </li>
                                    <li> &#9733; </li>
                                    <li> &#9733; </li>
                                </ul>
                                <p>(2 Reviews)</p>
                            </div>
                            <h1 className="productDetails-Tittle" >Here is. {props.product.name} Name & Informations </h1>
                            <p className="productDetails-Avaible">Availability (In stock)</p>
                        </section>
                        <div className="productDetails-PriceSection">
                            <p>$ {props.product.price[count]}</p>
                            <ul className="productDetails-Size">
                                <li className = { small ? "productDetails-SizeHovered" : "productDetails-SizeHover"} onClick={() => {setCount(0); test()}} >S</li>
                                <li className = { medium ? "productDetails-SizeHovered" : "productDetails-SizeHover"} onClick={() => {setCount(1); test()}} >M</li>
                                <li className = { big ? "productDetails-SizeHovered" : "productDetails-SizeHover"} onClick={() => {setCount(2); test()}} >B</li>
                            </ul>
                        </div>
                        <section>
                            <ul className="productDetails-InfoOptions">
                                <li>Product Info.</li>
                            </ul>
                            <div className="productDetails-Info">
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
                                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
                                ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem 
                                ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsum
                            </div>
                        </section>
                        <div className="productDetails-Buttons">
                            <div className="productDetails-QntButton">
                                <p>Qnt</p>
                                <ul>
                                    <li>-</li>
                                    <li>1</li>
                                    <li>+</li>
                                </ul>
                            </div>
                            <button>Add to Cart.</button>
                        </div>
                    </div>
                </div>
                </div>
    /*END of import*/
    if ( "/product/" + props.product.name + props.product.id !== decodeURI(window.location.pathname) ){
        content = ""
   }
    return (
        content
    )
}

export default ProductDetails