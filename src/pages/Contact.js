import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

class Contact extends Component {
  componentDidMount() {
    document.title = "Contact Us / EL Kontrols";
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginLeft: "50px" }}>
          <br />
          <br />
          <br />
          <br />

          <h1> M/s EL Kontrols</h1>
          <br />
          <h3> Sector-82, Noida, India </h3>
          <h3> Mobile - 8745007555</h3>
        </div>
      </div>
    );
  }
}

export default Contact;
