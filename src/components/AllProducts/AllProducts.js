import React from 'react'
import TeaFinder from '../TeaFinder/TeaFinder'
import './AllProducts.css'
import CategoriesAll from './CategoriesAll'
import ProductsDataBase from '../../productDataBase'
import Product from './AllProducts-Product'
class AllProducts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const productDetails = ProductsDataBase.map(product =>
            <Product
                key={product.id}
                product={product}
            />)
        return (
            <div className="allProduct-box">
                <CategoriesAll />
                <div className="allProduct-ProductsBox">
                    <p>
                        {productDetails.length} tea's found. 
                    </p>
                    <div className="allProduct-ProductsList">
                        {productDetails}
                    </div>
                </div>
            </div>
        )
    }
}
export default AllProducts