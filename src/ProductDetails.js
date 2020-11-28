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
        <div>
            {content}
        </div>
    )
}

export default ProductDetails