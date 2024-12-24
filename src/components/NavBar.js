import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function NavBar({ onNavigate }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Course App
        </Typography>
        <Button color="inherit" onClick={() => onNavigate("home")}>Home</Button>
        <Button color="inherit" onClick={() => onNavigate("login")}>Login</Button>
        <Button color="inherit" onClick={() => onNavigate("signin")}>Sign In</Button>
        <Button color="inherit" onClick={() => onNavigate("help")}>Help</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
