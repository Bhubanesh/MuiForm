//Header for the whole page(parent header)

import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  styled,
} from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
}));

const InputBaseWrapper = styled(InputBase)(({ theme }) => ({
  opacity: "0.6",
  padding: `8px ${theme.spacing(1)}px`,
  fontSize: "0.8rem",
  border: "1px solid #ccc",
  borderRadius: "25px",
  borderColor: "#878A87",
  display: "flex",
  alignItem: "center",
  color: "#333",
  "&:hover": {
    backgroundColor: "#D9D8D8",
  },
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  return (
    <AppBarWrapper position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBaseWrapper
              placeholder="Search"
              startAdornment={<SearchIcon fontSize="small" />}
            />{" "}
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="primary" fontSize="small">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={6} color="secondary" fontSize="small">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />{" "}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarWrapper>
  );
};

export default Header;
