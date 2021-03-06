import React from "react";

import { Card, CardMedia } from "@mui/material";
import IntroCardPic from "../assets/headerimg.jpg";

export default function IntroCard() {
  const introCardStyle = {
    backgroundColor: "rgb(186, 171, 218)",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.493)",
    borderRadius: "7px",
    height: "100%",
    width: "100%",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    marginBottom: 2,
  };

  const cardMediaStyle = {
    maxWidth: "10em",
    maxHeight: "20em",
    borderRadius: "50%",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
  };

  return (
    <>
      <Card sx={introCardStyle}>
        <CardMedia sx={cardMediaStyle} component="img" image={IntroCardPic} />
      </Card>
    </>
  );
}
