import React,{useState} from 'react'
function BasketElementDesktop(props) {
    let item = props.product.split(",")
    /*Remember to change value of / when chenging size of the array with data passed to Basket*/
    const [click, setClick] = useState(item.length / 4)
    return (
        <tr className="basket-ContentProduct">
            <th className="basket-ContentName">{item[1]}</th>
            <th className="basket-ContentSize">
                <div>{item[2]}</div>
            </th>
            <th className="basket-ContentQunt">
                <div 
                    onClick={() => {
                        if(click > 1) {
                            setClick(click - 1)
                        }
                    }}
                >
                    -
                </div>
                <div>{click}</div>
                <div
                    onClick={() => {
                        setClick(+click + 1)
                    }}
                >
                    +
                </div>
            </th>
            <th className="basket-ContentPrice">{item[3]}$</th>
            <th className="basket-ContentRemove">
                <div 
                    onClick={(e) => {
                        localStorage.removeItem(item[1] + item[0] );
                        window.location.reload();
                        props.content.setBasket(true)
                    }}
                >
                    X
                </div>
            </th>
        </tr>
    )
}
export default BasketElementDesktop