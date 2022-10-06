import React from "react";
import mobileImage from "./images/image-product-mobile.jpg";
import cartImage from "./images/icon-cart.svg";

export default function App() {
  return (
    <main>
      <div className="card m-auto">
        <img className="card-img-top" src={mobileImage} alt="Chanel perfume" />
        <div className="card-body p-4">
          <p className="text-uppercase category">Perfume</p>
          <h1 className="fs-1 fw-bold">Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="d-flex align-items-start">
            <p className="price text-success fw-bold">$149.99</p>
            <p className="ogriginal-price">$169.99</p>
          </div>

          <div className="d-grid">
            <button className="btn btn-success fw-bold" type="button">
              <img src={cartImage} alt="" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
