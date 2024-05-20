import "./App.css";
import SideMenu from "../component/SideMenu";
import Header from "../component/Header";
import styled from "styled-components";
import { CssBaseline } from "@mui/material";

const AppMainContainer = styled("div")({
  paddingLeft: "320px",
  width: "100%"
});

function App() {
  return (
    <>
      <SideMenu />
      <AppMainContainer>
        <Header />
      </AppMainContainer>
      <CssBaseline />  {/*to add the common css rules*/}
    </>
  );
}

export default App;
