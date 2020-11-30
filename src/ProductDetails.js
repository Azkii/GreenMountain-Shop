import {Link} from 'react-router-dom'
import iconArrow from './Photos/icons/arrow.svg'

function ProductDetails(props) {
  let content = <div className="productDetails-MainContainer">
                <Link to="/">
                <img className="productDetails-BackButton" src={iconArrow} />
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
                            <p>$ {props.product.price[0]}</p>
                            <ul className="productDetails-Size">
                                <li className="productDetails-SizeHover" >S</li>
                                <li>|</li>
                                <li className="productDetails-SizeHover">M</li>
                                <li>|</li>
                                <li className="productDetails-SizeHover">B</li>
                            </ul>
                        </div>
                        <section>
                            <ul className="productDetails-InfoOptions">
                                <li>Product Info.</li>
                            </ul>
                            <div className="productDetails-Info">
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsum
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
    if ( "/product/" + props.product.name + props.product.id !== decodeURI(window.location.pathname) ){
        content = ""
   }
    return (
        content
    )
}

export default ProductDetails