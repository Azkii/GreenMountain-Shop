import './App.css';
import './AppMobile.css'
import React, {useRef} from 'react'
import {Route} from 'react-router-dom'
import NavBar from './Navbar'
import HomePage from './HomePage'
import Products from './Products'
import AboutUs from './AboutUs'
import Footer from './Footer'
import ProductsDataBase from './productDataBase'
import ProductDetails from './ProductDetails'
function App() {
  const HomePageRef = useRef(null)
  const ProductsRef = useRef(null)
  const AboutUsRef = useRef(null)
  const scrollToHomePage = () => {HomePageRef.current.scrollIntoView()}
  const scrollToProducts= () => ProductsRef.current.scrollIntoView()
  const scrollToAboutUs = () => AboutUsRef.current.scrollIntoView()

  //Render detailed items
  const productDetails = ProductsDataBase.map(product =>
    <ProductDetails
        key={product.id}
        product={product}
    />)
  //
  
  return (
    <div className="App">
      <Route path="/" exact >
        <NavBar 
          content={{
            scrollToHomePage : scrollToHomePage,
            scrollToProducts : scrollToProducts,
            scrollToAboutUs : scrollToAboutUs,
          }} 
        />
        <HomePage content={{HomePageRef : HomePageRef}}/>
        <Products content={{ProductsRef : ProductsRef}} />
        <AboutUs content={{AboutUsRef : AboutUsRef}}/>
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
    </div>
  );
}

export default App;
