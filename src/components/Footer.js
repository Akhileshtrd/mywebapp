import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="footer mt-auto py-3">
        <div className="row">
          <div className="col-xs-3" style={{ marginLeft: "50px" }}>
            <h2 className="ttt"> EL Kontrols </h2>
            <h4 style={{ color: "yellowgreen" }}>
              Sector-82, Noida <br />
              www.elkontrols.ml
              <br />
              +91-8745007555
            </h4>
          </div>

          <div className="col-xs-3" style={{ marginLeft: "100px" }}>
            <br />
            <br />
            <br />
            <p style={{ color: "white" }}>
              dhskfhkshkdfhkshkdfhkshfkhhhhhhhhhh
              <br />
              dhskfhkshkdfhkshkdfhkshfkhhhhhhhhhh
            </p>
          </div>
          <div className="col-xs-3" style={{ marginLeft: "100px" }}>
            <br />
            <br />
            <br />
            <p style={{ color: "white" }}>
              dhskfhkshkdfhkshkdfhkshfkhhhhhhhhhh
              <br />
              dhskfhkshkdfhkshkdfhkshfkhhhhhhhhhh
            </p>
          </div>
          <div className="col-xs-3" style={{ marginLeft: "180px" }}>
            {/*<div className="heading">Menu</div>*/}
            <div className="heading" />
            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Productlist">Products</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
