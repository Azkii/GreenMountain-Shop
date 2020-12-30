import React,{useState} from 'react'
function BasketElementMobile(props) {
    const [deleted, setDeleted] = useState(false)
    let item = props.product.split(",")
    /*Remember to change value of / when chenging size of the array with data passed to Basket*/
    const [click, setClick] = useState(item.length / 4)
    return (
        <div>
            {deleted ? "" : 
            <ul className="basketMobile-Product">
                <li className="basketMobile-ProductInfo">
                        <div className="basketMobile-ProductInfoName">{item[1]}</div>
                    <div className="basketMobile-ProductPrice">{item[3]}$</div>
                </li>
                <div className="basketMobile-ProductAmount1">
                            <p
                                onClick={() => {
                                    setClick(+click + 1)
                                }}
                            >
                                +
                            </p>
                            <p>{click}</p>
                            <p
                                onClick={() => {
                                    if(click > 1) {
                                        setClick(click - 1)
                                    }
                                }}
                            >
                                -
                            </p>
                </div>
                <div className="basketMobile-ContentRemove"
                    onClick={() => {
                        localStorage.removeItem(item[1] + item[0] + item[2] );
                        setDeleted(true)
                    }}
                > X </div>
            </ul>}
        </div>
    )
}
export default BasketElementMobile