import React from "react";
import { Button as MuiButton } from "@mui/material";
const Button = (props) => {
    console.log("button");
  const { size, text, color, onClick, variant, ...other } = props;
  console.log("Button");
  return (
    <MuiButton
      color={color || "primary"}
      size={size || "medium"}
      variant={variant || "contained"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
