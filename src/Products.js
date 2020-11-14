import React from 'react'
import Categories from './components/Categories/Categories'
import Product from './components/Product/Product'
import ProductsDataBase from "./productDataBase"
//Imported buttons
import ShowMore from './components/Product/ShowMore'
import ShowAll from './components/Product/ShowAll'
class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kotek: 6
        }
        this.showMore = this.showMore.bind(this)
        this.showButton = <ShowMore content={{showMore: this.showMore}} />
    }
    showMore() {
        this.setState(prevState => {
            return {
                kotek: prevState.kotek + 3
            }
        })
        if (this.state.kotek + 3 >= 12) {
            this.showButton = <ShowAll />
        }
        else {
            this.showButton = <ShowMore content={{showMore : this.showMore}} />
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
                {this.showButton}
            </div>
        )
    }
}
export default Products