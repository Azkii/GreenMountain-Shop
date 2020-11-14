import React from 'react'
import Categories from './components/Categories/Categories'
import Product from './components/Product/Product'
import ProductsDataBase from "./productDataBase"
class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kotek: 6
        }
        this.showAll = this.showAll.bind(this)
    }
    showAll() {
        this.setState(prevState => {
            return {
                kotek: prevState.kotek + 3
            }
        })
        if (this.state.kotek + 3 >= 12) {
            console.log("xd")
        }
        else {
            console.log("adam")
        }
    }
    render() {
        const ProductList = ProductsDataBase.map(product =>
            <Product
                key={product.id}
                product={product}
            />)
        const ProductListSliced = ProductList.slice(0, this.state.kotek)
        return (
            <div className="products-container">
                <div className="products-boxFlex">
                    <div className="products-categories">
                        <Categories />
                    </div>
                    <div className="products-list">
                        {ProductListSliced}
                    </div>
                </div>
                <button 
                    className="products-ButtonShowMore"
                    onClick={
                        this.showAll
                    }
                >
                    Show more.
                </button>
            </div>
        )
    }
}
export default Products