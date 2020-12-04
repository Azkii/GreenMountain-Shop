import {Link} from 'react-router-dom'
import iconArrowBlack from './Photos/icons/arrow.svg'
import iconArrowWhite from './Photos/icons/arrowWhite.svg'
import React, {useState} from 'react'
import './components/ProductDetails/productDetails.css'
import './components/ProductDetails/productDetailsMobile.css'

function ProductDetails(props) {
    const [photo, setPhoto] = useState(0)
    const [qntCount, setQntCount] = useState(1)
    const [count, setCount] = useState(0)
    const [small, setSmall] = useState(true)
    const [medium, setMedium] = useState(false)
    const [big, setBig] = useState(false)
/*Dynamic resize to mobile ver*/
const [Mobile, setMobile] = useState(false);
    const showMobile = () => {
        if (window.innerWidth <= 1000) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    }
    window.addEventListener('load', showMobile);
    window.addEventListener('resize', showMobile);
/*End of Dynamic resize*/
/*Import*/
  let contentDesktop = 
                <div className="productDetails-MainContainer">
                    <Link to="/">
                    <img className="productDetails-BackButton" src={iconArrowBlack} alt="arrowSign" />
                    </Link>
                    <div className="productDetails-Box">
                        <div className="productDetails-Photos">
                            <div className="productDetails-Gallery">
                                <img src={props.product.gallery[0]} onClick= {() => setPhoto(0)} alt={props.product.name}></img>
                                <img src={props.product.gallery[1]} onClick= {() => setPhoto(1)} alt={props.product.name}></img>
                                <img src={props.product.gallery[2]} onClick= {() => setPhoto(2)} alt={props.product.name}></img>
                            </div>
                            <div className="productDetails-PhotoDis">
                                <img src={props.product.gallery[photo]} alt="Green tea"></img>
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
                                    <li className = { small ? "productDetails-SizeHovered" : "productDetails-SizeHover"} onClick={() => {setSmall(true); setMedium(false); setBig(false); setCount(0)}} title="Small size" >S</li>
                                    <li className = { medium ? "productDetails-SizeHovered" : "productDetails-SizeHover"} onClick={() => {setMedium(true); setSmall(false); setBig(false); setCount(1)}} title="Medium size">M</li>
                                    <li className = { big ? "productDetails-SizeHovered" : "productDetails-SizeHover"} onClick={() => {setBig(true); setSmall(false); setMedium(false); setCount(2)}} title="Big size" >B</li>
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
                                        <li onClick={() => {if(qntCount > 1) {setQntCount(qntCount - 1)}} } >-</li>
                                        <li>{qntCount}</li>
                                        <li onClick={() => setQntCount(qntCount + 1)} >+</li>
                                    </ul>
                                </div>
                                <button title={"Whole cost: " + props.product.price[count] * qntCount + "$"  } >Add to Cart.</button>
                            </div>
                        </div>
                    </div>
                </div>
/*Mobile version*/
    let contentMobile =         
                        <div className="productDetailsMobile-Box">
                            <Link to="/">
                                <img className="productDetailsMobile-BackButton" src={iconArrowWhite} alt="Go back button" />
                            </Link>
                            <div className="productDetailsMobile-Image">
                                <img src={props.product.gallery[3]} alt="Green tea"></img>
                            </div>
                            <div className="productDetailsMobile-Content">
                                <h1 className="productDetailsMobile-Name">{props.product.name}</h1>
                                <p className="productDetailsMobile-Price">$ {props.product.price[count]}</p>
                                <ul className="productDetailsMobile-Size">
                                    <li className = { small ? "productDetailsMobile-SizeHovered" : "productDetailsMobile-SizeHover"} onClick={() => {setSmall(true); setMedium(false); setBig(false); setCount(0)}} title="Small size" >S</li>
                                    <li className = { medium ? "productDetailsMobile-SizeHovered" : "productDetailsMobile-SizeHover"} onClick={() => {setMedium(true); setSmall(false); setBig(false); setCount(1)}} title="Medium size">M</li>
                                    <li className = { big ? "productDetailsMobile-SizeHovered" : "productDetailsMobile-SizeHover"} onClick={() => {setBig(true); setSmall(false); setMedium(false); setCount(2)}} title="Big size" >B</li>
                                </ul>
                                <div className="productDetailsMobile-Desc">
                                    Our tea will help you in many ways..
                                    Some text ...
                                </div>
                                <button className="productDetailsMobile-BuyButton">ADD TO CARD</button>
                            </div>
                        </div> 
    /*END of import*/
        if ( "/product/" + props.product.name + props.product.id !== decodeURI(window.location.pathname) ){
            contentDesktop = ""
            contentMobile = ""
        }
    return (
        <div>
            {Mobile ? contentMobile : contentDesktop}
        </div>
    )
}

export default ProductDetails