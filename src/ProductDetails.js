import {Link} from 'react-router-dom'

function ProductDetails(props) {
    let content = <div>
                    <h1>{props.product.name}</h1>
                    <div>{props.product.price[1]}</div>
                    <img src={props.product.image} alt="test"></img>
                    <Link to="/"> <h1>FUCK GO BACK</h1> </Link>
                  </div>
    if ( "/product/" + props.product.name + props.product.id !== decodeURI(window.location.pathname) ){
        content = ""
   }
    return (
            <div className="productDetails-Box">
                <div className="producDetails-Photos">
                    <div className="productDetails-Gallery">
                        <img src={props.product.image} alt="Green tea"></img>
                        <img src={props.product.image} alt="Green tea"></img>
                        <img src={props.product.image} alt="Green tea"></img>
                    </div>
                    <div className="productDetails-PhotoDis">
                        <img src={props.product.image} alt="Green tea"></img>
                    </div>
                </div>
                <div className="producDetails-Content">
                    <section>
                        <div className="producDetails-Rating" >
                            <ul>
                                <li> &#9733; </li>
                                <li> &#9733; </li>
                                <li> &#9733; </li>
                                <li> &#9733; </li>
                                <li> &#9733; </li>
                            </ul>
                            <p>(2 Reviews)</p>
                        </div>
                        <h1 className="producDetails-Tittle" >Here is. {props.product.name} Name & Informations </h1>
                        <p className="productDetails-Avaible">Availability (In stock)</p>
                    </section>
                    <div className="producDetails-PriceSection">
                        <p>$ {props.product.price[0]}</p>
                        <ul className="producDetails-Size">
                            <li>S</li>
                            <li>|</li>
                            <li>M</li>
                            <li>|</li>
                            <li>B</li>
                        </ul>
                    </div>
                    <section>
                        <ul className="producDetails-InfoOptions">
                            <li>Product Info.</li>
                            <li>Reviews</li>
                        </ul>
                        <div className="producDetails-Info">
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsumem ipsumLorem ipsumLorem ipsum
                        </div>
                    </section>
                    <div className="producDetails-Buttons">
                        <div className="producDetails-QntButton">
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
    )
}

export default ProductDetails