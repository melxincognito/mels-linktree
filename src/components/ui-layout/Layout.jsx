import React from "react";
import Header from "./Header";

export default function Layout(props) {
  const mainDivStyle = {
    marginTop: 70,
    overflow: "scroll",
  };

  return (
    <div>
      <Header />
      <main style={mainDivStyle}>{props.children}</main>
    </div>
  );
}
