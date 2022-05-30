import React from "react";
import { Button } from "@mui/material";

export default function CardButton(props) {
  const buttonStyles = {
    backgroundColor: "rgb(55, 6, 101)",
    gap: "10px",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
    position: "relative",
    padding: "0.6rem 0",
    borderRadius: "25px",
    width: "320px",
  };
  return (
    <div>
      <Button
        variant="contained"
        sx={buttonStyles}
        onClick={props.onClick}
        fullWidth
      >
        {props.children}
      </Button>
    </div>
  );
}
