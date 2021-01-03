import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home.js";
import Productlist from "./pages/Productlist.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Joinus from "./pages/Joinus.js";
import ProductPage from "./pages/ProductPage.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Productlist" component={Productlist} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Joinus" component={Joinus} />
          <Route
            exact
            path="/Productlist/ProductPage"
            component={ProductPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
