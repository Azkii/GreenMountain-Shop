import React from 'react'
function BasketElementDesktop(props) {
    const item = props.product.split(",")
    return (
        <tr className="basket-ContentProduct">
            <th className="basket-ContentName">{item[0]}</th>
            <th className="basket-ContentSize">
                <div>{item[1]}</div>
            </th>
            <th className="basket-ContentQunt">
                <div>-</div>
                <div>0</div>
                <div>+</div>
            </th>
            <th className="basket-ContentPrice">{item[2]}$</th>
            <th className="basket-ContentRemove">
                <div>X</div>
            </th>
        </tr>
    )
}
export default BasketElementDesktop