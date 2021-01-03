import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductCard.css";
import im1 from "../components/im1.jpg";
import im2 from "../components/im2.jpg";
import im3 from "../components/im3.jpg";
import im4 from "../components/im4.jpg";
import im5 from "../components/im5.jpg";
import im6 from "../components/im6.jpg";

class ProductCard extends Component {
  render() {
    return (
      <div style={{ margin: "11px" }}>
        {/* first row of product list */}

        <div className="row">
          <div className="col-xs-3" style={{ margin: "13px" }}>
            <div className="pcontainer">
              <ProductImage
                prodid="1212"
                prodprice="1212.12/-"
                prodimg={im3} /**look the passing of normal data vs image  */
                prodname="Akhilesh usb"
                prodlink="/Productlist/ProductPage"
              />
            </div>
          </div>
          <div className="col-xs-3" style={{ margin: "13px" }}>
            <div className="pcontainer">
              <ProductImage
                prodid="1212"
                prodprice="1212.12/-"
                prodimg={im3} /**look the passing of normal data vs image  */
                prodname="Akhilesh usb"
                prodlink="/Productlist/ProductPage"
              />
            </div>
          </div>
          <div className="col-xs-3" style={{ margin: "13px" }}>
            <div className="pcontainer">
              <ProductImage
                prodid="1212"
                prodprice="1212.12/-"
                prodimg={im3} /**look the passing of normal data vs image  */
                prodname="Akhilesh usb"
                prodlink="/Productlist/ProductPage"
              />
            </div>
          </div>
          <div className="col-xs-3" style={{ margin: "13px" }}>
            <div className="pcontainer">
              <ProductImage
                prodid="1212"
                prodprice="1212.12/-"
                prodimg={im4} /**look the passing of normal data vs image  */
                prodname="Akhilesh usb"
                prodlink="/Productlist/ProductPage"
              />
            </div>
          </div>
          <div className="col-xs-3" style={{ margin: "13px" }}>
            <div className="pcontainer">
              <ProductImage
                prodid="1212"
                prodprice="1212.12/-"
                prodimg={im5} /**look the passing of normal data vs image  */
                prodname="Akhilesh usb"
                prodlink="/Productlist/ProductPage"
              />
            </div>
          </div>
          <div className="col-xs-3" style={{ margin: "13px" }}>
            <div className="pcontainer">
              <ProductImage
                prodid="1212"
                prodprice="1212.12/-"
                prodimg={im6} /**look the passing of normal data vs image  */
                prodname="Akhilesh usb"
                prodlink="/Productlist/ProductPage"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

class ProductImage extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.prodlink}>
          <div className="pcode">{this.props.prodid}</div>
          <div className="pprice">{this.props.prodprice}</div>
          <img src={this.props.prodimg} className="myimg" />
          <div className="pname">{this.props.prodname}</div>
        </Link>
      </div>
    );
  }
}
