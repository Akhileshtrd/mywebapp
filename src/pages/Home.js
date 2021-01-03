import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Carousel from "../components/Carousel.js";
import "./Home.css";
import ProductCard from "../components/ProductCard.js";
import ProdCategory from "../components/ProdCategory.js";

class Home extends Component {
  componentDidMount() {
    document.title = "Home / EL Kontrols"; // First change title at public/index.html
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div id="container">
          <Navbar />
          <Carousel> </Carousel>
          <br />
          <HomeDetails />
          <br />
          <ProdCategory title=" EMS Embedded System IoT" />
          <br />
          <ProductCard />
          <ProdCategory title="BOM Management & Components" />
          <br />
          <ProductCard />
          <ProdCategory title="Newly Developed Products" />
          <br />
          <ProductCard />
          <Footer style={{ position: "relative" }} />
        </div>
      </div>
    );
  }
}

export default Home;

/**List of Local Components  */
/**HomeDetails   :::: Company policy details in 3 column   */
/**HomeCategory  :::: Basically a button used for categories products*/

class HomeDetails extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-3" style={{ marginLeft: "50px" }}>
            <div>
              <h2>Step-by-step</h2>
              <p>
                We make it easy to learn how to make anything,
                <br />
                one step at a time. From the stovetop to the workshop,
                <br />
                you are sure to be inspired by the awesome projects <br />
                that are shared everyday.
              </p>
            </div>
          </div>
          <div className="col-xs-3" style={{ marginLeft: "50px" }}>
            <div>
              <h2>Customer is King</h2>
              <p>
                We, at EL Kontrols, are committed to the customer.
                <br />
                Customer service our top priorties.
                <br />A happy customer brings smile to us.
              </p>
            </div>
          </div>
          <div className="col-xs-3" style={{ marginLeft: "50px" }}>
            <div>
              <h2>A Happy Place</h2>
              <p>
                Making things makes people happy.
                <br />
                We can't prove it, but we know it to be true.
                <br />
                Find your happy place, and join us.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
