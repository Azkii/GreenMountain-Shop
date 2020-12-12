import React from 'react'
import Categories from './components/Categories/Categories'
import Product from './components/Product/Product'
import ProductMobile from './components/Product/ProductMobile'
import ProductsDataBase from "./productDataBase"
//Imported buttons
import ShowMore from './components/Product/ShowMore'
import ShowAll from './components/Product/ShowAll'
class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kotek: 6,
            catBlackTea: false,
            catGreenTea: false,
            catOolongTea: false,
            catWhiteTea: false,
            sortByName: false,
            fromLowest: false,
            fromHighest: false,
        }
        this.showMore = this.showMore.bind(this)
        this.categoriesByTypeBlack = this.categoriesByTypeBlack.bind(this)
        this.categoriesByTypeGreen = this.categoriesByTypeGreen.bind(this)
        this.categoriesByTypeOolong = this.categoriesByTypeOolong.bind(this)
        this.categoriesByTypeWhite = this.categoriesByTypeWhite.bind(this)
        this.showButton = <ShowMore content={{showMore: this.showMore}} />
        //sort by name
        this.sortValueByName = this.sortValueByName.bind(this)
        //sort by price
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
//sort seperate categiores
    categoriesByTypeBlack() {
        if (this.state.catBlackTea === false) {
            this.setState(() => {
                return {
                    catBlackTea: true,
                    kotek: 12,
                }
            })
            this.showButton = <ShowAll />
        }
        else {
            this.setState(() => {
                return {
                    catBlackTea: false,
                    kotek: 6,
                }
            })
            this.showButton = <ShowMore content={{showMore : this.showMore}} />
        }
    }
    categoriesByTypeGreen() {
        if (this.state.catGreenTea === false) {
            this.setState(() => {
                return {
                    catGreenTea: true,
                    kotek: 12,
                }
            })
            this.showButton = <ShowAll />
        }
        else {
            this.setState(() => {
                return {
                    catGreenTea: false,
                    kotek: 6,
                }
            })
            this.showButton = <ShowMore content={{showMore : this.showMore}} />
        }
    }
    categoriesByTypeOolong() {
        if (this.state.catOolongTea === false) {
            this.setState(() => {
                return {
                    catOolongTea: true,
                    kotek: 12,
                }
            })
            this.showButton = <ShowAll />
        }
        else {
            this.setState(() => {
                return {
                    catOolongTea: false,
                    kotek: 6,
                }
            })
            this.showButton = <ShowMore content={{showMore : this.showMore}} />
        }
    }
    categoriesByTypeWhite() {
        if (this.state.catWhiteTea === false) {
            this.setState(() => {
                return {
                    catWhiteTea: true,
                    kotek: 12,
                }
            })
            this.showButton = <ShowAll />
        }
        else {
            this.setState(() => {
                return {
                    catWhiteTea: false,
                    kotek: 6,
                }
            })
            this.showButton = <ShowMore content={{showMore : this.showMore}} />
        }
    }
    //Sort value by Name
    sortValueByName() {
        if (this.state.sortByName === false) {
            this.setState(() => {
                return {
                    sortByName: true,
                    fromHighest: false,
                    fromLowest: false,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    sortByName: false,
                }
            })
        }
    }
    //Sort value by price
    sortValueLowest() {
        if (this.state.fromLowest === false) {
            this.setState(() => {
                return {
                    fromLowest: true,
                    fromHighest: false,
                    sortByName: false,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    fromLowest: false,
                }
            })
        }
    }
    sortValueHighest() {
        if (this.state.fromHighest === false) {
            this.setState(() => {
                return {
                    fromHighest: true,
                    fromLowest: false,
                    sortByName: false,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    fromHighest: false,
                }
            })
        }
    }
//end of it
    render(props) {
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
        const ProductListMobile = ProductsDataBase.map(product =>
            <ProductMobile
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
        let ProductListSliced
        if (this.props.content.mobile === false) {
            ProductListSliced = ProductListMobile.slice(0, this.state.kotek)
        }
        else {
            ProductListSliced = ProductList.slice(0, this.state.kotek)
        }
        //sort by name
        if (this.state.sortByName === true) {
            ProductListSliced = ProductListSliced.sort(function(a, b) {
                if(a.props.product.name.toLowerCase() < b.props.product.name.toLowerCase()) return -1;
                if(a.props.product.name.toLowerCase() > b.props.product.name.toLowerCase()) return 1;
                return 0;
               })
        }
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
            <div className="products-container" ref={this.props.content.ProductsRef}>
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
                                sortValueByName: this.sortValueByName,
                                sortByName: this.state.sortByName,
                                sortValueLowest: this.sortValueLowest,
                                fromLowest: this.state.fromLowest,
                                sortValueHighest: this.sortValueHighest,
                                fromHighest: this.state.fromHighest,
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