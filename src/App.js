import './App.css';
import './AppMobile.css'
import React, {useRef} from 'react'
import NavBar from './Navbar'
import HomePage from './HomePage'
import Products from './Products'
import AboutUs from './AboutUs'
import Footer from './Footer'
import {Route} from 'react-router-dom'
function App() {
  const HomePageRef = useRef(null)
  const ProductsRef = useRef(null)
  const AboutUsRef = useRef(null)
  const scrollToHomePage = () => {HomePageRef.current.scrollIntoView()}
  const scrollToProducts= () => ProductsRef.current.scrollIntoView()
  const scrollToAboutUs = () => AboutUsRef.current.scrollIntoView()
  return (
    <div className="App">
      <NavBar 
        content={{
          scrollToHomePage : scrollToHomePage,
          scrollToProducts : scrollToProducts,
          scrollToAboutUs : scrollToAboutUs,
        }} 
      />
      <Route path="/" exact >
        <HomePage content={{HomePageRef : HomePageRef}}/>
        <Products />
        <AboutUs />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
