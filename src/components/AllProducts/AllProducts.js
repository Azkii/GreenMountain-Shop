import React from 'react'
import TeaFinder from '../TeaFinder/TeaFinder'
import './AllProducts.css'
function AllProducts() {
    return (
        <div className="allProduct-box">
            <h1>Let's search together for best bet for you.</h1>
            <TeaFinder />
        </div>
    )
}
export default AllProducts