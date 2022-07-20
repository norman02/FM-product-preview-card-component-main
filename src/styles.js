const fraunces = "'Fraunces', serif";
const montserrat = "'Montserrat', sans-serif";
const pageStyles = {
  alignItems: "center",
  backgroundColor: "#F2EAE2",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
};

const productCardStyles = {
  backgroundColor: "white",
  borderRadius: 10,
  overflow: "hidden",
  width: 343,
};

const productTypeStyles = {
  color: "#6C7289",
  fontFamily: montserrat,
  fontWeight: "400",
  fontSize: 12,
  letterSpacing: 5,
  lineHeight: "15px",
  textTransform: "uppercase",
};

const productTitleStyles = {
  color: "#1C232B",
  fontFamily: fraunces,
  fontSize: 32,
  fontWeight: "900",
  lineHeight: "32px",
  marginTop: 13,
};
const productDescriptionStyles = {
  color: "#6C7289",
  fontFamily: montserrat,
  fontSize: 14,
  fontWeight: "400",
  lineHeight: "23px",
};

const priceContainerStyles = {
  display: "flex",
  marginTop: 23,
  marginBottom: 12,
};

const priceStyles = {
  color: "#3D8168",
  fontFamily: fraunces,
  fontSize: 32,
  fontWeight: "900",
  lineHeight: "32px",
};

const orignalPriceStyles = {
  color: "#6C7289",
  fontFamily: montserrat,
  fontSize: 13,
  fontWeight: "400",
  marginLeft: 24,
  textDecoration: "line-through",
};

const primaryButtonStyles = {
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
};

const cartStyles = {
  marginRight: 11.61,
};

export const styles = {
  pageStyles: pageStyles,
  productCardStyles: productCardStyles,
  productTypeStyles: productTypeStyles,
  productTitleStyles: productTitleStyles,
  productDescriptionStyles: productDescriptionStyles,
  priceContainerStyles: priceContainerStyles,
  priceStyles: priceStyles,
  orignalPriceStyles: orignalPriceStyles,
  primaryButtonStyles: primaryButtonStyles,
  cartStyles: cartStyles,
};
