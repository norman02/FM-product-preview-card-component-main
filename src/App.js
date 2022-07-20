import React from "react";
import mobileImage from "./images/image-product-mobile.jpg";
import cartImage from "./images/icon-cart.svg";
import "./app.css";
import { styles } from "./styles";

export default function App() {
  return (
    <div style={styles.pageStyles}>
      <main style={styles.productCardStyles}>
        <img src={mobileImage} alt="a bottle of Chanel perfume" />
        <div style={{ padding: 24 }}>
          <p style={styles.productTypeStyles}>Perfume</p>
          <h1 style={styles.productTitleStyles}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p style={styles.productDescriptionStyles}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div style={styles.priceContainerStyles}>
            <p style={styles.priceStyles}>$149.99</p>
            <p style={styles.orignalPriceStyles}>$169.99</p>
          </div>
          <button style={styles.primaryButtonStyles}>
            <img src={cartImage} alt="" style={styles.cartStyles}></img>
            <p>Add to Cart</p>
          </button>
        </div>
      </main>
    </div>
  );
}
