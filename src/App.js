import './App.css';
import './AppMobile.css'
import React,{useState} from 'react'
import NavBar from './Navbar'
import HomePage from './HomePage'
import Products from './Products'
import AboutUs from './AboutUs'
import Footer from './Footer'
function App() {
  const [showBurger, setBurger] = useState(true);
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
  return (
    <div className="App">
      <NavBar content={{mobileSize : showBurger}} />
      <HomePage />
      <Products />
      <AboutUs content={{mobileSize : showBurger}} />
      <Footer />
    </div>
  );
}

export default App;
