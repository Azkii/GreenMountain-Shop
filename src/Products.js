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
            kotek: 6,
            sliced: false,
            catBlackTea: false,
            catGreenTea: false,
            catOolongTea: false,
            catWhiteTea: false,
            fromLowest: false,
            fromHighest: false,
        }
        this.showMore = this.showMore.bind(this)
        this.sliced = this.sliced.bind(this)
        this.categoriesByTypeBlack = this.categoriesByTypeBlack.bind(this)
        this.categoriesByTypeGreen = this.categoriesByTypeGreen.bind(this)
        this.categoriesByTypeOolong = this.categoriesByTypeOolong.bind(this)
        this.categoriesByTypeWhite = this.categoriesByTypeWhite.bind(this)
        this.showButton = <ShowMore content={{showMore: this.showMore}} />
        this.sortValueLowest = this.sortValueLowest.bind(this)
        this.sortValueHighest = this.sortValueHighest.bind(this)
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
    sliced() {
        if(window.innerWidth <= 700) {
            this.setState(() => {
                return {
                    sliced: 3
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    sliced: 1
                }
            })
        }
    }
//sort seperate categiores
    categoriesByTypeBlack() {
        if (this.state.catBlackTea === false) {
            this.setState(prevState => {
                return {
                    catBlackTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catBlackTea: false
                }
            })
        }
    }
    categoriesByTypeGreen() {
        if (this.state.catGreenTea === false) {
            this.setState(prevState => {
                return {
                    catGreenTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catGreenTea: false
                }
            })
        }
    }
    categoriesByTypeOolong() {
        if (this.state.catOolongTea === false) {
            this.setState(prevState => {
                return {
                    catOolongTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catOolongTea: false
                }
            })
        }
    }
    categoriesByTypeWhite() {
        if (this.state.catWhiteTea === false) {
            this.setState(prevState => {
                return {
                    catWhiteTea: true,
                }
            })
        }
        else {
            this.setState(prevState => {
                return {
                    catWhiteTea: false,
                }
            })
        }
    }
    //Sort value by price
    sortValueLowest() {
        if (this.state.fromLowest === false) {
            this.setState(prevState => {
                return {
                    fromLowest: true,
                }
            })
        }
        else {
            this.setState(prevState => {
                return {
                    fromLowest: false,
                }
            })
        }
    }
    sortValueHighest() {
        if (this.state.fromHighest === false) {
            this.setState(prevState => {
                return {
                    fromHighest: true,
                }
            })
        }
        else {
            this.setState(prevState => {
                return {
                    fromHighest: false,
                }
            })
        }
    }
//end of it
    render() {
        const ProductList = ProductsDataBase.map(product =>
            <Product
                key={product.id}
                product={product}
                content={{
                    catBlackTea: this.state.catBlackTea,
                    catGreenTea: this.state.catGreenTea,
                    catOolongTea: this.state.catOolongTea,
                    catWhiteTea: this.state.catWhiteTea,
                }}
            />)
        //sliced for phones
        let ProductListSliced = ProductList.slice(0, this.state.kotek / this.state.sliced)
        window.addEventListener('load', this.sliced)
        window.addEventListener('resize', this.sliced)

        //sort by value
        if (this.state.fromLowest === true) {
            ProductListSliced = ProductListSliced.sort(function(a ,b) {
                    return a.props.product.price[0] - b.props.product.price[0]
                })
        }
        if (this.state.fromHighest === true) {
            ProductListSliced = ProductListSliced.sort(function(a ,b) {
                    return b.props.product.price[0] - a.props.product.price[0]
                })
        }
        return (
            <div className="products-container">
                <div className="products-boxFlex">
                    <div className="products-categories">
                        <Categories 
                            content={{
                                categoriesByTypeBlack: this.categoriesByTypeBlack, 
                                catBlackTea: this.state.catBlackTea,
                                categoriesByTypeGreen: this.categoriesByTypeGreen,
                                catGreenTea: this.state.catGreenTea,
                                categoriesByTypeOolong: this.categoriesByTypeOolong,
                                catOolongTea: this.state.catOolongTea,
                                categoriesByTypeWhite: this.categoriesByTypeWhite,
                                catWhiteTea: this.state.catWhiteTea,
                                sortValueLowest: this.sortValueLowest,
                                sortValueHighest: this.sortValueHighest,
                            }}/>
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