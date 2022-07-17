import React from "react";
import mobileImage from "./images/image-product-mobile.jpg";
import cartImage from "./images/icon-cart.svg";
import "./app.css";

export default function App() {
  const fraunces = "'Fraunces', serif";
  const montserrat = "'Montserrat', sans-serif";
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#F2EAE2",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <main
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          overflow: "hidden",
          width: 343,
        }}
      >
        <img src={mobileImage} alt="a bottle of Chanel perfume" />
        <div style={{ padding: 24 }}>
          <p
            style={{
              color: "#6C7289",
              fontFamily: montserrat,
              fontWeight: "400",
              fontSize: 12,
              letterSpacing: 5,
              lineHeight: "15px",
              textTransform: "uppercase",
            }}
          >
            Perfume
          </p>
          <h1
            style={{
              color: "#1C232B",
              fontFamily: fraunces,
              fontSize: 32,
              fontWeight: "900",
              lineHeight: "32px",
              marginTop: 13,
            }}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p
            style={{
              color: "#6C7289",
              fontFamily: montserrat,
              fontSize: 14,
              fontWeight: "400",
              lineHeight: "23px",
            }}
          >
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div style={{ display: "flex", marginTop: 23, marginBottom: 12 }}>
            <p
              style={{
                color: "#3D8168",
                fontFamily: fraunces,
                fontSize: 32,
                fontWeight: "900",
                lineHeight: "32px",
              }}
            >
              $149.99
            </p>
            <p
              style={{
                color: "#6C7289",
                fontFamily: montserrat,
                fontSize: 13,
                fontWeight: "400",
                marginLeft: 24,
                textDecoration: "line-through",
              }}
            >
              $169.99
            </p>
          </div>
          <button
            style={{
              alignItems: "center",
              backgroundColor: "#3D8168",
              border: "none",
              borderRadius: 8,
              display: "flex",
              color: "white",
              fontFamily: montserrat,
              height: 48,
              justifyContent: "center",
              outline: "none",
              width: "100%",
            }}
          >
            <img src={cartImage} alt="" style={{ marginRight: 11.61 }}></img>
            <p>Add to Cart</p>
          </button>
        </div>
      </main>
    </div>
  );
}
