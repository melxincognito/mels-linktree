import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Header() {
  const headerStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    color: "white",
    bgcolor: "rgb(215, 127, 161)",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.493)",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={headerStyles}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "Kanit" }}
            >
              Mel Incögnito's Links
            </Typography>
            <Button color="inherit">
              {" "}
              <FavoriteBorderIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
