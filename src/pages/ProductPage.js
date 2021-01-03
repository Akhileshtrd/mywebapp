import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ProductCard from "../components/ProductCard.js";
import "./ProductPage.css";
import ProdCategory from "../components/ProdCategory.js";

import im1 from "../components/im1.jpg";
import im2 from "../components/im2.jpg";
import im3 from "../components/im3.jpg";
import im4 from "../components/im4.jpg";
import im5 from "../components/im5.jpg";
import im6 from "../components/im6.jpg";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), imm: this.props.prodimg };
  }
  componentDidMount() {
    document.title = "ProductPage / EL Kontrols";
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  test() {
    window.open(
      "https://wwww.elkontrols.ml/static/media/im3.9079986b.jpg",
      "Window Title",
      "width=500, height=450"
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <h6 style={{ textAlign: "right", marginRight: "10px" }}>
          {this.state.date.toLocaleTimeString()}
        </h6>
        <h3>Product Name </h3>

        <button
          style={{
            backgroundColor: "azure",
            width: "100%",
            border: "2px solid black",
            textAlign: "left",
          }}
        >
          some details of product{" "}
        </button>

        <div className="row">
          <br />
          <div
            className="col-xs-3"
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              marginTop: "15px",
              marginBottom: "1px",
              width: "60%",
              backgroundColor: "yellow",
            }}
          >
            <div>
              <h3>dhjsfkskdf</h3>
              <br />
              <div>
                <img src={im3} className="prodpic" onClick={this.test} />
              </div>
            </div>
          </div>
          <div
            className="col-xs-3"
            style={{
              marginLeft: "10px",
              marginRight: "50px",
              marginTop: "10px",
              marginBottom: "10px",
              width: "28%",
              backgroundColor: "yellow",
            }}
          >
            <div>
              <h3>dvsljvljs</h3>
            </div>
          </div>
        </div>
        <br />

        <button
          style={{
            backgroundColor: "azure",
            width: "100%",
            border: "2px solid black",
            textAlign: "left",
          }}
        >
          some details of product{" "}
        </button>
      </div>
    );
  }
}

export default ProductPage;
