import "./App.css";
import SideMenu from "../component/SideMenu";
import Header from "../component/Header";
//import styled from "@mui/material";
import { CssBaseline, createTheme, ThemeProvider, styled } from "@mui/material";
import Employee from "../page/employee/Employee";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3840B2",
      light: "#777DC5", //
    },
    secondary: {
      main: "#CE091B",
      light: "#F54D5D",
    },
    background: {
      default: "#E6E8FA",
    },
  },

  shape: {
    borderRadius: "12px",
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transform: "translateZ(0)",
        },
      },
    },

    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const AppMainContainer = styled("div")({
  paddingLeft: "320px",
  width: "100%",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <AppMainContainer>
        <Header />
        <Employee />
      </AppMainContainer>
      <CssBaseline /> {/*to add the common css rules*/}
    </ThemeProvider>
  );
}

export default App;
