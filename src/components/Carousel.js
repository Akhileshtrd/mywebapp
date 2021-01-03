import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "../pages/Home.css";

import im4 from "../components/im7.jpg";
import im5 from "../components/im8.jpg";
import im6 from "../components/im9.jpg";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carousel-example-2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="view">
              <img className="d-block w-100" src={im4} alt="First slide" />
              <div className="mask rgba-black-light"></div>
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive contpos">Design & Development</h3>
              <br />
              <p className="h3-responsive contpos">
                Concept <br /> Circuit <br /> PCB <br /> Firmware <br />{" "}
                Enclosure
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img className="d-block w-100" src={im5} alt="Second slide" />
              <div className="mask rgba-black-strong"></div>
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive contpos">Prototype & Bring-Up </h3>
              <br />
              <p className="h3-responsive contpos">
                BOM Control
                <br /> Procurement <br />
                Assembly <br /> Prototype <br />
                Production
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img className="d-inline w-100" src={im6} alt="Third slide" />
              <div className="mask rgba-black-slight"></div>
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive contpos">Testing & Finishing </h3>
              <br />
              <p className="h3-responsive contpos">
                Performance
                <br /> Thermal & Environment <br />
                Labeling <br /> Packaging <br />
                Delivery
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-example-2"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-example-2"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
