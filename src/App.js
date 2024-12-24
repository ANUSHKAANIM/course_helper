import React, { useState } from "react";
import { Container, CssBaseline, AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import Home from "./components/Home";   // Correct the capitalization of the component import
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Help from "./components/Help";
import NavBar from "./components/NavBar";  // Assuming you have this NavBar component

function App() {
  const [activePage, setActivePage] = useState("Home");

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <CssBaseline />
      <NavBar onNavigate={handleNavigation} />
      <Container>
        {activePage === "Home" && <Home />}
        {activePage === "login" && <Login />}
        {activePage === "signin" && <SignIn />}
        {activePage === "help" && <Help />}
      </Container>
    </div>
  );
}

export default App;
