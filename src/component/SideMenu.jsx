import { styled } from "@mui/material";
import React from "react";

const SideMenuContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  backgroundColor: "#253053",
  left: "0px",
  width: "320px",
  height: "100%",
});

const SideMenu = () => {
  return <SideMenuContainer />;
};

export default SideMenu;




