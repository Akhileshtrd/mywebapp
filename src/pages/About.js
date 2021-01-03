import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>this is About page</h2>
        </div>
      </div>
    );
  }
}

export default About;
