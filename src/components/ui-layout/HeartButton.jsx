import React from "react";
import { withToggler } from "../hoc/withToggler";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Heart(props) {
  const divStyle = {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  };

  return (
    <div onClick={props.toggle} style={divStyle}>
      {props.on ? <FavoriteBorderIcon /> : <FavoriteIcon />}
    </div>
  );
}

const SuperchargedFavoriteComponent = withToggler(Heart, {
  defaultOnValue: true,
});
export default SuperchargedFavoriteComponent;
