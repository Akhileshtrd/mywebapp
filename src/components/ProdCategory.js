import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProdCategory.css";

class ProdCategory extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            marginTop: "5px",
            marginBottom: "5px",

            height: "60px",
            width: "100%",
            padding: "15px",

            border: "1px solid transparent",
            borderRadius: "5px",
            backgroundColor: "#343a40",
          }}
        >
          <p className="bttn"> {this.props.title} </p>
          {/***<p className="bttn"> Your own text </p> */
          /**but above code used as a dynamic style which is beauty of JavaScript */}
        </button>
      </div>
    );
  }
}
export default ProdCategory;
