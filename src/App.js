import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/main.css";

//navigation

// pages
import HomeScreen from "./pages/Home/home";
import AboutScreen from "./pages/About/about";
import ServiceScreen from './pages/Services/services'
import StockScreen from './pages/Stock/stock'
import ContactSceeen from './pages/Contact/contact'

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/services" component={ServiceScreen} />
          <Route path="/stock" component={StockScreen} />
          <Route path="/contact" component={ContactSceeen} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
