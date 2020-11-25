import './App.css';
import './AppMobile.css'
import React,{useState} from 'react'
import NavBar from './Navbar'
import HomePage from './HomePage'
import Products from './Products'
import AboutUs from './AboutUs'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" exact >
        <HomePage />
        <Products />
        <AboutUs />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
