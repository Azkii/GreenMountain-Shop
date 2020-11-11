import React from 'react'
import Categories from './components/Categories/Categories'
import Product from './components/Product/Product'
import ProductsDataBase from "./productDataBase"
function Products() {
    const ProductList = ProductsDataBase.map(product =>
            <Product
                key={product.id}
                product={product}
            />)
    return (
        <div className="products-container">
            <div className="products-boxFlex">
                <div className="products-categories">
                    <Categories />
                </div>
                <div className="products-list">
                    {ProductList}
                </div>
            </div>
        </div>
    )
}
export default Products