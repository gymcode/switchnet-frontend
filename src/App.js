import React, { Fragment, useEffect } from "react";
import gsap from 'gsap'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/main.css";

//navigation
import Header from "./navigation/header";


// pages
import HomeScreen from "./pages/Home/home";
import AboutScreen from "./pages/About/about";
import ServiceScreen from './pages/Services/services'
import StockScreen from './pages/Stock/stock'
import ContactScreen from './pages/Contact/contact'


// route
const router = [
  {path: "/", name: "Home", Component:HomeScreen},
  {path: "/about-us", name: "About", Component:AboutScreen},
  {path: "/services", name: "Service", Component:ServiceScreen},
  {path: "/stock", name: "Stock", Component:StockScreen},
  {path: "/contact", name: "Contact", Component:ContactScreen},
  
]

function App() {

  useEffect(()=>{
    const vh = window.innerHeight * .01; 
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to("body", 0, {css: {visibility: "visible"}})
  }, [])

  return (
      <>
        {/* <Header/>  */}
        <div className="App">
          <Router>
            <Switch>
              {router.map((data, key)=> (
                <Route key={key} exact path={data.path} name={data.name} component={data.Component}>           
                </Route>
              ))}
            </Switch>
          </Router>
        </div>
      </>    
  );
}

export default App;
