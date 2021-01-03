import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ProductCard from "../components/ProductCard.js";
import ProdCategory from "../components/ProdCategory.js";

class Products extends Component {
  componentDidMount() {
    document.title = "Products / EL Kontrols";
  }
  render() {
    return (
      <div>
        <Navbar />
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
    );
  }
}

export default Products;
