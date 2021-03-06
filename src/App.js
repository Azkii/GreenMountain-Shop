import './App.css';
import './AppMobile.css'
import React, {useRef, useState} from 'react'
import {Link, Route} from 'react-router-dom'
import NavBar from './Navbar'
import HomePage from './HomePage'
import Products from './Products'
import AboutUs from './AboutUs'
import Footer from './Footer'
import ProductsDataBase from './productDataBase'
import ProductDetails from './ProductDetails'
import AllProducts from './components/AllProducts/AllProducts'
import BasketIcon from './components/Basket/BasketIcon'
import Basket from './components/Basket/Basket'
function App() {
  const HomePageRef = useRef(null)
  const ProductsRef = useRef(null)
  const AboutUsRef = useRef(null)
  const scrollToHomePage = () => {HomePageRef.current.scrollIntoView()}
  const scrollToProducts= () => ProductsRef.current.scrollIntoView()
  const scrollToAboutUs = () => AboutUsRef.current.scrollIntoView()
  const [showBurger, setBurger] = useState(true);
  const [showIconBasket, setShowIconBasket] = useState(true)
  const showNavBarMenu = () => {
      if (window.innerWidth <= 1000) {
          setBurger(false)
      }
      else {
          setBurger(true)
      }
  }
  window.addEventListener('load', showNavBarMenu);
  window.addEventListener('resize', showNavBarMenu);
  //Render detailed items
  const productDetails = ProductsDataBase.map(product =>
    <ProductDetails
        key={product.id}
        product={product}
        content = {{
          mobile : showBurger,
        }}
    />)
  //
  return (
    <div className="App">
      <Link to="/Shoping-cart">
        <BasketIcon 
          content={{
            showIconBasket : showIconBasket,
            setShowIconBasket : setShowIconBasket,
          }} 
        />
      </Link>
      <Route path="/Shoping-Cart" exact >
        <Basket          
            content={{
              mobile : showBurger,
              setShowIconBasket : setShowIconBasket,
            }}
        />
      </Route>
      <Route path="/" exact >
        <NavBar 
          content={{
            scrollToHomePage : scrollToHomePage,
            scrollToProducts : scrollToProducts,
            scrollToAboutUs : scrollToAboutUs,
            showBurger : showBurger,
          }} 
        />
        <HomePage content={{HomePageRef : HomePageRef}}/>
        <Products 
          content={{
            ProductsRef : ProductsRef,
            mobile : showBurger,
          }}
        />
        <AboutUs 
          content={{
            AboutUsRef : AboutUsRef,
            showBurger : showBurger,
          }}
        />
        <Footer
          content={{
            scrollToHomePage : scrollToHomePage,
            scrollToProducts : scrollToProducts,
          }} 
        />
      </Route>
      <Route path="/product/" >
        {productDetails}
      </Route>
      <Route path="/products/" exact>
        <AllProducts content = {{ mobile : showBurger }} />
      </Route>
    </div>
  );
}

export default App;
