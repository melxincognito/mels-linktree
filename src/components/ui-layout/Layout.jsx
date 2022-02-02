import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const mainDivStyle = {
    margin: "70px 0px 15px",
    overflow: "scroll",
    padding: 10,
  };

  return (
    <>
      <Header />
      <main style={mainDivStyle}>{props.children}</main>
      <Footer />
    </>
  );
}
