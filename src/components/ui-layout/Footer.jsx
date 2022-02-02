import React from "react";
import { Paper, Typography } from "@mui/material";

export default function Footer() {
  const footerStyles = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    color: "white",
    bgcolor: "rgb(215, 127, 161, 0.6)",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "10px",
  };

  return (
    <div>
      <Paper sx={footerStyles} elevation={5}>
        {" "}
        <Typography sx={{ fontFamily: "Kanit" }}>
          {" "}
          © 2022 - melxincögnito | All Rights Reserved | Designed by Mel
          Incögnito{" "}
        </Typography>
      </Paper>
    </div>
  );
}
