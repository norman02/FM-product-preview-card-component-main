import React from "react";
import mobileImage from "./images/image-product-mobile.jpg";
import cartImage from "./images/icon-cart.svg";

export default function App() {
  return (
    <div>
      <img src={mobileImage} alt="Chanel perfume" />
      <p>Perfume</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <p>$149.99</p>
      <p>$169.99</p>
      <button>
        <img src={cartImage} alt="" /> Add to Cart
      </button>
    </div>
  );
}
