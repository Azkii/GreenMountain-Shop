import {Link} from 'react-router-dom'
import iconArrow from './Photos/icons/arrow.svg'
import React, {useState} from 'react'

function ProductDetails(props) {
    const [photo, setPhoto] = useState(0)
    const [qntCount, setQntCount] = useState(1)
    const [count, setCount] = useState(0)
    const [small, setSmall] = useState(true)
    const [medium, setMedium] = useState(false)
    const [big, setBig] = useState(false)
/*Import*/
  let content = <div className="productDetails-MainContainer">
                <Link to="/">
                <img className="productDetails-BackButton" src={iconArrow} alt="arrowSign" />
                </Link>
                <div className="productDetails-Box">
                    <div className="productDetails-Photos">
                        <div className="productDetails-Gallery">
                            <img src={props.product.gallery[0]} onClick= {() => setPhoto(0)} alt="Green tea"></img>
                            <img src={props.product.gallery[1]} onClick= {() => setPhoto(1)} alt="Green tea"></img>
                            <img src={props.product.gallery[2]} onClick= {() => setPhoto(2)} alt="Green tea"></img>
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
    /*END of import*/
    if ( "/product/" + props.product.name + props.product.id !== decodeURI(window.location.pathname) ){
        content = ""
   }
    return (
        content
    )
}

export default ProductDetails