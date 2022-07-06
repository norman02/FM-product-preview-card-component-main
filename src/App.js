import React from "react";
import mobileImage from "./images/image-product-mobile.jpg";
import "./css/main.css";

export default function App() {
  return (
    <main className="app">
      <div className="product-card">
        <img src={mobileImage} alt="Chanel Perfume"></img>
        <div className="content">
          <p className="product-type">Perfume</p>
          <h1 className="product-name">Gabrielle Essence Eau De Parfum</h1>
          <p className="product-description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className="price">$149.99</p>
          <p className="original-price">$169.99</p>
          <button className="add-button">Add to Cart</button>
        </div>
      </div>
    </main>
  );
}
