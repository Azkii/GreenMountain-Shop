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
        }
        this.showMore = this.showMore.bind(this)
        this.sliced = this.sliced.bind(this)
        this.categoriesByTypeBlack = this.categoriesByTypeBlack.bind(this)
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
            this.setState(() => {
                return {
                    catBlackTea: true
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
            this.setState(() => {
                return {
                    catGreenTea: true
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
            this.setState(() => {
                return {
                    catOolongTea: true
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
            this.setState(() => {
                return {
                    catWhiteTea: true
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    catWhiteTea: false
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
                content={{buttonClicked: this.state.catBlackTea}}
            />)
        //sliced for phones
        let ProductListSliced = ProductList.slice(0, this.state.kotek / this.state.sliced)
        window.addEventListener('load', this.sliced)
        window.addEventListener('resize', this.sliced)
        //sort by value do dokonczenia
        function sortValue() {
            ProductListSliced.sort(function(a ,b) {
                console.log(b.props.product.price[0])
                return a.props.product.price[0] - b.props.product.price[0]
            })
        }
        //Do dokonczenia sortuje ale nie wykonuje, brakuje useEffect
        return (
            <div className="products-container">
                <div className="products-boxFlex">
                    <div className="products-categories">
                        <Categories content={{categoriesByTypeBlack: this.categoriesByTypeBlack, buttonClicked: this.state.catBlackTea}}/>
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