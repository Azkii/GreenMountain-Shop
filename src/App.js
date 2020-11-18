import './App.css';
import './AppMobile.css'
import React from 'react'
import NavBar from './Navbar'
import HomePage from './HomePage'
import Products from './Products'
import AboutUs from './AboutUs'
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Products />
      <AboutUs />
    </div>
  );
}

export default App;
