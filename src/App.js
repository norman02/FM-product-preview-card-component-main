import React, { Component } from "react";
import mobileImage from "./images/image-product-mobile.jpg"

export default class App extends Component {
  render() {
    return <main>
      <img src={mobileImage} alt="Chanel Perfume"></img>
      <p>Perfume</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
      <p>$149.99</p>
      <p>$169.99</p>
      <button>Add to Cart</button>
    </main>;
  }
}
