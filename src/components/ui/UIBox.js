import React from "react";
import { Box } from "@mui/material";

export default function UIBox(props) {
  const boxStyles = {
    backgroundColor: "rgb(186, 171, 218)",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.493)",
    borderRadius: "7px",
    height: "5rem",
    width: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <Box sx={boxStyles}>{props.children}</Box>
    </div>
  );
}
