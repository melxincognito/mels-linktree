import React from "react";
import { Button } from "@mui/material";

export default function CardButton(props) {
  const buttonStyles = {
    backgroundColor: "rgb(55, 6, 101)",
    gap: "10px",
  };
  return (
    <div>
      <Button variant="contained" sx={buttonStyles} onClick={props.onClick}>
        {props.children}
      </Button>
    </div>
  );
}
