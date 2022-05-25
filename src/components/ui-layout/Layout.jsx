import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const mainDivStyle = {
    margin: "70px 0px 15px",
    overflow: "scroll",
    padding: "0.5rem 0.5rem 4rem ",
  };

  return (
    <>
      <Header />
      <main style={mainDivStyle}>{props.children}</main>
      <Footer />
    </>
  );
}
