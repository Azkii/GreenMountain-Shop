import React from 'react'
import {Link} from 'react-router-dom'
import './AllProducts.css'
import CategoriesAll from './CategoriesAll'
import ProductsDataBase from '../../productDataBase'
import Product from './AllProducts-Product'
import ProductMobile from '../Product/ProductMobile'
class AllProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            catBlackTea: false,
            catGreenTea: false,
            catOolongTea: false,
            catWhiteTea: false,
            sortByName: false,
            fromLowest: false,
            fromHighest: false,
        }
        this.categoriesByTypeBlack = this.categoriesByTypeBlack.bind(this)
        this.categoriesByTypeGreen = this.categoriesByTypeGreen.bind(this)
        this.categoriesByTypeOolong = this.categoriesByTypeOolong.bind(this)
        this.categoriesByTypeWhite = this.categoriesByTypeWhite.bind(this)
        //sort by name
        this.sortValueByName = this.sortValueByName.bind(this)
        //sort by price
        this.sortValueLowest = this.sortValueLowest.bind(this)
        this.sortValueHighest = this.sortValueHighest.bind(this)
    }
//sort seperate categiores
    categoriesByTypeBlack() {
        if (this.state.catBlackTea === false) {
            this.setState(() => {
                return {
                    catBlackTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catBlackTea: false,
                }
            })
        }
    }
    categoriesByTypeGreen() {
        if (this.state.catGreenTea === false) {
            this.setState(() => {
                return {
                    catGreenTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catGreenTea: false,
                }
            })
        }
    }
    categoriesByTypeOolong() {
        if (this.state.catOolongTea === false) {
            this.setState(() => {
                return {
                    catOolongTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catOolongTea: false,
                }
            })
        }
    }
    categoriesByTypeWhite() {
        if (this.state.catWhiteTea === false) {
            this.setState(() => {
                return {
                    catWhiteTea: true,
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catWhiteTea: false,
                }
            })
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
    render() {
        let productDetails = ProductsDataBase.map(product =>
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
        //
        let ProductList
        let adam = 1
        if (this.props.content.mobile === false) {
            ProductList = ProductListMobile
        }
        else {
            ProductList = productDetails
        }
        //
        if (this.state.sortByName === true) {
            ProductList = ProductList.sort(function(a, b) {
                if(a.props.product.name.toLowerCase() < b.props.product.name.toLowerCase()) return -1;
                if(a.props.product.name.toLowerCase() > b.props.product.name.toLowerCase()) return 1;
            return 0;
               })
        }
        //sort by value
        if (this.state.fromLowest === true) {
            ProductList = ProductList.sort(function(a ,b) {
                    return a.props.product.price[0] - b.props.product.price[0]
                })
        }
        if (this.state.fromHighest === true) {
            ProductList = ProductList.sort(function(a ,b) {
                    return b.props.product.price[0] - a.props.product.price[0]
                })
        }
        return (
            <div className="allProduct-box">
                <CategoriesAll
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
                    }}
                />
                <div className="allProduct-ProductsBox">
                    <p className="allProduct-lenght">
                        {productDetails.length} tea's found. 
                    </p>
                    <div className="allProduct-ProductsList">
                        {ProductList}
                    </div>
                </div>
                <div className="allProduct-Line"></div>
                <div className="allProduct-Footer">
                    <ul>
                        <li>Blue Mountain.</li>
                        <li className="allProduct-FooterLinks">
                            <a>Contact Us</a>
                            <Link to={"/"}><a>Home Page</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default AllProducts